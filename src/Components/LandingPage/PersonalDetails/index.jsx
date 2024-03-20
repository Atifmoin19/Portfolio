import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import atif from "../../../Assets/myimage.jpeg";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  FaDownload,
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoDownload, IoLocation } from "react-icons/io5";

const PersonalDetails = () => {
  return (
    <>
      <Flex
        direction={"column"}
        w={"100%"}
        h={"70%"}
        shadow={"md"}
        bg={"#fff"}
        rounded={"xl"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Image
          src={atif}
          w={"200px"}
          my={"1rem"}
          mt={"-5rem"}
          height={"200px"}
          rounded={"xl"}
          objectPosition={"center"}
          objectFit={"cover"}
        />
        <Text fontWeight={"bold"} fontSize={"xl"} my={".4rem"}>
          Atif Moin
        </Text>
        <Text fontSize={"xs"} bg={"gray.100"} rounded={"md"} p={".5rem 1rem"}>
          Associate Software Engineer
        </Text>
        {/* follow */}
        <Flex
          alignItems={"center"}
          mx={"auto"}
          justifyContent={"center"}
          my={"1rem"}
          gap={"2"}
        >
          <Text fontSize={"xs"} bg={"gray.100"} rounded={"sm"} p={".5rem"}>
            <AiFillFacebook />
          </Text>

          <Text fontSize={"xs"} bg={"gray.100"} rounded={"sm"} p={".5rem"}>
            <AiFillInstagram />
          </Text>

          <Text fontSize={"xs"} bg={"gray.100"} rounded={"sm"} p={".5rem"}>
            <AiFillLinkedin />
          </Text>

          <Text fontSize={"xs"} bg={"gray.100"} rounded={"sm"} p={".5rem"}>
            <AiFillGithub />
          </Text>
        </Flex>

        {/* contact */}

        <Flex
          w={"80%"}
          bg={"#f6f6f6"}
          p={"1rem"}
          direction={"column"}
          gap={"1rem"}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Flex w={"100%"} alignItems={"center"} gap={2}>
            {" "}
            <Flex
              bg={"#fff"}
              shadow={"md"}
              w={"25px"}
              fontSize={"xs"}
              h={"25px"}
              rounded={"sm"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <FaPhoneAlt />
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"start"}
            >
              <Text fontSize={"xs"}>Phone</Text>
              <Text fontSize={"xs"} fontWeight={"bold"}>
                +91-7007136187
              </Text>
            </Flex>
          </Flex>
          <Divider borderColor={"gray.300"} />

          <Flex w={"100%"} alignItems={"center"} gap={2}>
            {" "}
            <Flex
              bg={"#fff"}
              shadow={"md"}
              w={"25px"}
              fontSize={"xs"}
              h={"25px"}
              rounded={"sm"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <FaEnvelope />
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"start"}
            >
              <Text fontSize={"xs"}>Email</Text>
              <Text fontSize={"xs"} fontWeight={"bold"}>
                atifmoin19@gmail.com
              </Text>
            </Flex>
          </Flex>
          <Divider borderColor={"gray.300"} />

          <Flex w={"100%"} alignItems={"center"} gap={2}>
            {" "}
            <Flex
              bg={"#fff"}
              shadow={"md"}
              w={"25px"}
              fontSize={"xs"}
              h={"25px"}
              rounded={"sm"}
              justifyContent={"center"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <IoLocation />
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"start"}
            >
              <Text fontSize={"xs"}>Location</Text>
              <Text fontSize={"xs"} fontWeight={"bold"}>
                Okhla, New Delhi
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* cv */}
        <Flex my={"1rem"}>
          <Flex alignItems={"center"} gap={2} className="custombutton">
            <IoDownload />
            <Text>Download CV</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default PersonalDetails;
