import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdCodeWorking } from "react-icons/io";

const StylishCard = (props) => {
  const { item } = props;
  const HiglightedCard = (props) => {
    return (
      <>
        <Flex
          bg={"primary.500"}
          color={"#fff"}
          rounded={"md"}
          p={".4rem .5rem"}
        >
          <Text fontSize={"10px"}>{props}</Text>
        </Flex>
      </>
    );
  };
  return (
    <>
      <Flex
        w={"300px"}
        minH={"400px"}
        className="stylishCard"
        bg={"primary.500"}
        rounded={"4rem 0px"}
        p={"1rem"}
        cursor={"pointer"}
        justifyContent={"space-between"}
        alignItems={"start"}
        direction={"column"}
        overflow={"hidden"}
        shadow={"md"}
      >
        <Flex
          position={"relative"}
          transition={".4s ease"}
          _hover={{ width: "100%" }}
          w={"100%"}
          minH={"400px"}
          borderColor={"primary.500"}
          border={"-1px solid"}
          bg={item?.color ?? "secondary.500"}
          rounded={"3.5rem 0"}
          p={"1rem"}
          pt={"7rem"}
        >
          {/* icon comp */}
          <Flex
            className="boxwithicon"
            position={"absolute"}
            transition={".4s ease"}
            w={"100px"}
            top={-1}
            left={-1}
            h={"100px"}
            bg={"primary.500"}
            rounded={"3.5rem 0px"}
            p={"1rem"}
          >
            {/* icon */}
            <Flex
              w={"100%"}
              h={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              rounded={"2.8rem 0px"}
              zIndex={"3"}
              //   rounded={"full"}
              bg={item?.color ?? "secondary.500"}
              color={"primary.500"}
              fontSize={"3xl"}
            >
              {item?.icon ?? <IoMdCodeWorking />}
            </Flex>
          </Flex>

          <Flex
            w={"100%"}
            h={"100%"}
            direction={"column"}
            justifyContent={"start"}
            alignItems={"center"}
          >
            <Text color="#fff" fontWeight={"bold"} fontSize="2xl">
              {item?.heading ?? "Content"}
            </Text>

            <Flex gap={2} my={"1rem"} flexWrap={"wrap"}>
              {" "}
              {item.discription.length > 0 &&
                item.discription?.map((item) => {
                  return HiglightedCard(item);
                })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default StylishCard;
