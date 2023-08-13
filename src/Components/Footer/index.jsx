import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosCall, IoIosMail, IoIosMap } from "react-icons/io";

const Footer = () => {
  return (
    <Box>
      <Box w={"100%"} minH="12rem" bg={"primary.500"}>
        <Flex w={"100%"} minH="12rem" flexWrap={"wrap"}>
          <Flex
            flex={"40rem"}
            minH={"12rem"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text fontSize={"6xl"} color="#fff" letterSpacing={"5px"}>
              Portfolio
            </Text>
          </Flex>
          <Flex
            p={"1rem"}
            direction={"column"}
            justifyContent="flex-start"
            alignItems={"flex-start"}
            flex={"30rem"}
            minH={"12rem"}
            color="#fff"
          >
            <Text my={"1rem"} fontSize={"2xl"}>
              Address
            </Text>
            <Flex my={".2rem"} justifyContent={"center"} alignItems="center">
              <Text mx="1rem">
                <IoIosMap />
              </Text>
              Maidan Garhi Rd, Chhatarpur Enclave Phase 2, Chattarpur Enclave,
              Chhatarpur, New Delhi
            </Flex>
            <Flex my={".2rem"} justifyContent={"center"} alignItems="center">
              <Text mx="1rem">
                <IoIosCall />
              </Text>
              +91-7007136187
            </Flex>
            <Flex my={".2rem"} justifyContent={"center"} alignItems="center">
              <Text mx="1rem">
                <IoIosMail />
              </Text>
              atifmoin19@gmail.com
            </Flex>
          </Flex>
        </Flex>
        <Text
          py={"1rem"}
          fontSize={"sm"}
          textAlign={"center"}
          color={"#fff"}
          textTransform={"uppercase"}
        >
          designed with ❤️ @Atifmoin
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
