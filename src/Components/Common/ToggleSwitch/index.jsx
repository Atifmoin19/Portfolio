import { Box, Flex, Text, useEditable } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const ToggleSwitch = (props) => {
  const { w, onToggle, label1, label2, bg, defaultKey = "Inactive" } = props;
  const [isToggleActive, setIsToggleActive] = useState(false);
  useEffect(() => {
    setIsToggleActive(defaultKey === "Active" ? true : false);
  }, [defaultKey]);
  const onChange = () => {
    setIsToggleActive((prev) => {
      onToggle(!prev);
      return !prev;
    });
  };
  return (
    <>
      <Flex
        w={w ?? "fit-content"}
        border={"1px solid #fff"}
        shadow={"all"}
        overflow={"hidden"}
        rounded={"full"}
        height={"33px"}
        bg={isToggleActive ? bg ?? "secondary.300" : "#D6D6D6"}
        userSelect={"none"}
        onClick={onChange}
        cursor={"pointer"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"5px"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          width={isToggleActive ? "100%" : 0}
          overflow={"scroll"}
          transition={"width .2s ease"}
          opacity={isToggleActive ? "1" : "0"}
          color={isToggleActive ? "#fff" : ""}
          fontSize={"10px"}
        >
          {label1}
        </Flex>
        <Box
          h={"70%"}
          style={{ aspectRatio: "1/1" }}
          bg={"#fff"}
          rounded={"100%"}
          p={".6rem"}
        ></Box>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          width={!isToggleActive ? "100%" : 0}
          transition={"width .2s ease"}
          opacity={!isToggleActive ? "1" : "0"}
          overflow={"scroll"}
          fontSize={"10px"}
        >
          {label2}
        </Flex>
      </Flex>
    </>
  );
};

export default ToggleSwitch;
