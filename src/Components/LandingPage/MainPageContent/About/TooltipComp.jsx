import { Flex, Image, Tooltip } from "@chakra-ui/react";
import React, { useRef } from "react";
import useInView from "../../../../CustomHooks/useInView";

const TooltipTools = (props) => {
  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });
  const { item } = props;

  return (
    <div ref={targetRef}>
      {isInView && (
        <Tooltip label={item.tool}>
          <Flex
            direction={"column"}
            className={isInView ? "slideInAnimation" : ""}
            style={{ animationDelay: `${item.id * 0.1}s` }}
            border={"1px"}
            borderColor={"var(--font_color)"}
            // bg={"#fff"}
            w={"80px"}
            p={"1rem"}
            h={"80px"}
            overflow={"hidden"}
            rounded={"md"}
          >
            <Image
              objectFit={"contain"}
              w={"100%"}
              h={"100%"}
              src={item.link}
            />
          </Flex>
        </Tooltip>
      )}
      {!isInView && (
        <Tooltip label={item.tool}>
          <Flex
            direction={"column"}
            style={{ opacity: 0 }}
            border={"1px"}
            borderColor={"var(--font_color)"}
            // bg={"#fff"}
            w={"80px"}
            p={"1rem"}
            h={"80px"}
            overflow={"hidden"}
            rounded={"md"}
          >
            <Image
              objectFit={"contain"}
              w={"100%"}
              h={"100%"}
              src={item.link}
            />
          </Flex>
        </Tooltip>
      )}
    </div>
  );
};

export default TooltipTools;
