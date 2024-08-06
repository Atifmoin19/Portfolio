import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import useInView from "../CustomHooks/useInView";

const ComponentRenderer = (props) => {
  const { data, setActiveId } = props;
  const divRef = useRef(null);
  const isChapterInView = useInView({ targetRef: divRef });
  useEffect(() => {
    if (isChapterInView) {
      setActiveId(data.id);
    }
  }, [data, setActiveId, isChapterInView]);

  return (
    <Flex
      ref={divRef}
      className="wrapper-body"
      w={"100%"}
      zIndex={"60"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      backgroundPosition={"center"}
      bg="linear-gradient(to top, #accbee 0%, #e7f0fd 100%);"
      // filter={"blur(10px)"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {data.data}
    </Flex>
  );
};

export default ComponentRenderer;
