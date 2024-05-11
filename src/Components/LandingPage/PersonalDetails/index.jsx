import { Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import atif from "../../../Assets/myimage.jpeg";
import Insta from "../../../Assets/Logo/instagram.png";
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
import {
  IoDownload,
  IoFastFood,
  IoFastFoodOutline,
  IoLocation,
} from "react-icons/io5";
import DownloadBtn from "../../Common/Buttons/DownloadBtn";

const PersonalDetails = (props) => {
  const { onOpen } = props;
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      bg={"var(--shade1)"}
      h={"70%"}
      shadow={"md"}
      color={"var(--font_color)"}
      zIndex={9}
      rounded={"xl"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <Image
        src={atif}
        dropShadow={"30px 10px 4px #4444dd"}
        w={"200px"}
        my={"1rem"}
        height={"200px"}
        rounded={"xl"}
        objectPosition={"center"}
        objectFit={"cover"}
      />
      <Text fontWeight={"bold"} fontSize={"xl"} my={".4rem"}>
        Atif Moin
      </Text>
      <Text fontSize={"xs"} bg={"var(--theme)"} rounded={"md"} p={".5rem 1rem"}>
        Associate Software Engineer
      </Text>
      <Flex my={"1rem"}>
        {" "}
        <Button variant={"unstyled"} className="custombutton" onClick={onOpen}>
          <Flex p={"0 1rem"} alignItems={"center"} gap={2}>
            {" "}
            <Text fontSize={"sm"} color={"var(--theme)"}>
              {" "}
              Buy Me A
            </Text>
            <IoFastFood color={"var(--theme)"} fontSize={"md"} />
          </Flex>
        </Button>
      </Flex>

      {/* follow */}
      <Flex
        alignItems={"center"}
        mx={"auto"}
        justifyContent={"center"}
        my={"1rem"}
        gap={"2"}
      >
        <Text
          fontSize={"md"}
          bg={"gray.100"}
          rounded={"sm"}
          p={".5rem"}
          onClick={() => {
            window.open("https://m.facebook.com/jsone.atif");
          }}
          cursor={"pointer"}
          transition={".2s ease"}
          _hover={{ transform: "scale(1.3)" }}
        >
          <AiFillFacebook color="#1877F2" />
        </Text>

        <Text
          onClick={() => {
            window.open("https://www.instagram.com/_.a_ti_f._/");
          }}
          fontSize={"md"}
          bg={"gray.100"}
          rounded={"sm"}
          p={".5rem"}
          cursor={"pointer"}
          transition={".2s ease"}
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image w={"16px"} src={Insta} />
        </Text>

        <Text
          onClick={() => {
            window.open("https://www.linkedin.com/in/atif-moin-858167179");
          }}
          fontSize={"md"}
          bg={"gray.100"}
          rounded={"sm"}
          p={".5rem"}
          cursor={"pointer"}
          transition={".2s ease"}
          _hover={{ transform: "scale(1.3)" }}
        >
          <AiFillLinkedin color="#0A66C2" />
        </Text>

        <Text
          onClick={() => {
            window.open("https://github.com/Atifmoin19");
          }}
          fontSize={"md"}
          bg={"gray.100"}
          rounded={"sm"}
          p={".5rem"}
          cursor={"pointer"}
          transition={".2s ease"}
          _hover={{ transform: "scale(1.3)" }}
        >
          <AiFillGithub />
        </Text>
      </Flex>

      {/* contact */}

      <Flex
        w={"80%"}
        p={"1rem"}
        direction={"column"}
        gap={"1rem"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Flex
          w={"100%"}
          onClick={() => {
            window.open("tel:+917007136187", "_self");
          }}
          alignItems={"center"}
          gap={2}
          cursor={"pointer"}
          borderBottom={"1px"}
          _hover={{ borderColor: "#f43f5e" }}
          pb={".4rem"}
        >
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
            <FaPhoneAlt color="#f43f5e" />
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

        <Flex
          cursor={"pointer"}
          w={"100%"}
          alignItems={"center"}
          gap={2}
          onClick={() => {
            window.open("mailto:atifmoin19@gmail.com", "_self");
          }}
          borderBottom={"1px"}
          _hover={{ borderColor: "#3c82f6" }}
          pb={".4rem"}
        >
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
            <FaEnvelope color="#3c82f6" />
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

        <Flex
          cursor={"pointer"}
          w={"100%"}
          alignItems={"center"}
          gap={2}
          borderBottom={"1px"}
          _hover={{ borderColor: "#22c55d" }}
          pb={".4rem"}
        >
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
            <IoLocation color="#22c55d" />
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
    </Flex>
  );
};

export default PersonalDetails;
