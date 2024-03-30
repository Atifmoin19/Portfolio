import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const NavMenue = (props) => {
  const { setCurrentTab, currentTab, menues } = props;

  return (
    <>
      <Flex
        direction={{ lg: "column", md: "column", sm: "row", xs: "row" }}
        alignItems={"center"}
        bg={"#fff"}
        zIndex={9999}
        w={{ lg: "auto", md: "auto", sm: "100%", xs: "100%" }}
        h={"fit-content"}
        shadow={"md"}
        gap={"1rem"}
        rounded={"xl"}
        p={"1rem"}
      >
        {menues.map((item, idx) => {
          return (
            <Flex
              zIndex={"999"}
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
              bg={idx + 1 === currentTab ? "#0ca5e9" : "gray.100"}
              gap={1}
            >
              {" "}
              <Flex
                w={"25px"}
                fontSize={"xs"}
                h={"25px"}
                justifyContent={"center"}
                color={idx + 1 === currentTab ? "#fff" : "gray.500"}
                alignItems={"center"}
                textAlign={"center"}
              >
                {item.icon}
              </Flex>
              <Text
                color={idx + 1 === currentTab ? "#fff" : "gray.500"}
                fontSize={"xs"}
              >
                {item.title}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default NavMenue;
