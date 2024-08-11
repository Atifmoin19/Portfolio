import { Button } from "@chakra-ui/react";
import React from "react";

const DownloadBtn = (props) => {
  const { children, icon, isDisabled, ...rest } = props;
  return (
    <>
      <button
        type="button"
        class="bg-[var(--shade1)] text-center px-[1rem] rounded-xl h-14 relative font-sans text-[var(--font_color)] text-xl font-semibold group"
        style={{
          pointerEvents: isDisabled ? "none" : "all",
          opacity: isDisabled ? 0.2 : 1,
          userSelect: "none",
        }}
        {...rest}
      >
        <div
          style={{ pointerEvents: isDisabled ? "none" : "all" }}
          class="bg-[var(--shade2)] rounded-xl h-12 w-[50px] flex items-center text-[var(--shade1)] justify-center left-1 top-[4px] absolute group-hover:w-[100%] z-10 duration-500"
        >
          {icon}
        </div>
        <p
          style={{ pointerEvents: isDisabled ? "none" : "all" }}
          class="pl-[44px] relative"
        >
          {children}
        </p>
      </button>
      {/* <Button
        className="relative border hover:border-[var(--shade2)] duration-500 group cursor-pointer text-sky-50  overflow-hidden rounded-md bg-[var(--shade2)] p-2 flex justify-center items-center font-extrabold"
        {...rest}
      >
        {" "}
        <p style={{ zIndex: 2 }} className="text-[#fff]">
          {children}
        </p>
        <div className="absolute w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg[[var(--shade1)] delay-50 group-hover:delay-15"></div>
        <div className="absolute w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[var(--shade2)] delay-50 group-hover:delay-20"></div>
        <div className="absolute w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[var(--shade1)] delay-50 group-hover:delay-35"></div>
        <div className="absolute w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[var(--shade2)] delay-50 group-hover:delay-45"></div>
        <div className="absolute w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-[var(--shade1)] delay-50 group-hover:delay-55"></div>
      </Button> */}
    </>
  );
};

export default DownloadBtn;
