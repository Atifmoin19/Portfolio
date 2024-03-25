import { Button } from "@chakra-ui/react";
import React from "react";

const DownloadBtn = (props) => {
  const { children, ...rest } = props;
  return (
    <>
      <Button
        className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
        {...rest}
      >
        {" "}
        <p style={{ zIndex: 2 }}>{children}</p>
        <div className="absolute w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-50 group-hover:delay-15"></div>
        <div className="absolute w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-50 group-hover:delay-20"></div>
        <div className="absolute w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-50 group-hover:delay-35"></div>
        <div className="absolute w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-50 group-hover:delay-45"></div>
        <div className="absolute w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-50 group-hover:delay-55"></div>
      </Button>
    </>
  );
};

export default DownloadBtn;
