import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const FollowMe = () => {
  return (
    <>
      <Flex
        direction={"column"}
        gap={2}
        zIndex="999"
        position={"fixed"}
        right="-30"
        top="20%"
        color={"#fff"}
      >
        <Text
          _hover={{ transform: "translate(15px,10px)" }}
          onClick={() => {
            window.open("https://m.facebook.com/jsone.atif");
          }}
          width={"100px"}
          transform="translate(35px,10px)"
          transition={".3s"}
          cursor="pointer"
          bg="#3b5998"
          borderRadius={"500px"}
          p=".5rem"
        >
          <AiFillFacebook />
        </Text>
        <Text
          onClick={() => {
            window.open("https://www.instagram.com/_.a_ti_f._/");
          }}
          _hover={{ transform: "translate(15px,10px)" }}
          width={"100px"}
          transform="translate(35px,10px)"
          transition={".3s"}
          cursor="pointer"
          bg="#833AB4"
          borderRadius={"500px"}
          p=".5rem"
        >
          <AiFillInstagram />
        </Text>
        <Text
          _hover={{ transform: "translate(15px,10px)" }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/atif-moin-858167179");
          }}
          width={"100px"}
          transform="translate(35px,10px)"
          transition={".3s"}
          cursor="pointer"
          bg="#0077b5"
          borderRadius={"500px"}
          p=".5rem"
        >
          <AiFillLinkedin />
        </Text>
        <Text
          _hover={{ transform: "translate(15px,10px)" }}
          onClick={() => {
            window.open("https://github.com/Atifmoin19");
          }}
          width={"100px"}
          transform="translate(35px,10px)"
          transition={".3s"}
          cursor="pointer"
          bg="#4078c0"
          borderRadius={"500px"}
          p=".5rem"
        >
          <AiFillGithub />
        </Text>
      </Flex>
    </>
  );
};

export default FollowMe;
