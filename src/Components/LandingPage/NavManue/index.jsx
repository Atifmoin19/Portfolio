import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const NavMenue = (props) => {
  const { setCurrentTab, currentTab, menues } = props;

  return (
    <>
      <Flex
        direction={"column"}
        alignItems={"center"}
        bg={"#fff"}
        h={"fit-content"}
        shadow={"md"}
        gap={"1rem"}
        rounded={"xl"}
        p={"1rem"}
      >
        {menues.map((item, idx) => {
          return (
            <Flex
              key={idx}
              cursor={"pointer"}
              w={"100%"}
              onClick={() => {
                setCurrentTab(idx + 1);
              }}
              alignItems={"center"}
              p={".5rem"}
              rounded={"md"}
              direction={"column"}
              bg={idx + 1 === currentTab ? "secondary.500" : "gray.200"}
              gap={1}
            >
              {" "}
              <Flex
                w={"25px"}
                fontSize={"xs"}
                h={"25px"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
              >
                {item.icon}
              </Flex>
              <Text fontSize={"xs"}>{item.title}</Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default NavMenue;
