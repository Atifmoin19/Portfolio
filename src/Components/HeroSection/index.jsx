import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import myImage from "../../Assets/myimage.jpeg";
import Typical from "react-typical";
import { AiOutlineDownload, AiOutlineWhatsApp } from "react-icons/ai";
import cv from "../../Assets/resume.pdf";
const HeroSection = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <Flex
      p={"1rem"}
      px={{ lg: "2rem", md: "1rem", sm: "1rem", xs: ".2rem" }}
      justifyContent={"center"}
      alignItems={{
        lg: "center",
        md: "flex-start",
        sm: "flex-start",
        xs: "flex-start",
      }}
      minH={"100vh"}
      gap="10"
      flexWrap={"wrap"}
    >
      <Box
        width={{
          lg: "calc(100% - 400px)",
          md: "calc(100% - 200px)",
          sm: "100%",
          xs: "100%",
        }}
        height="100%"
      >
        <Text
          fontWeight={"bold"}
          fontSize={{ lg: "6xl", md: "4xl", sm: "4xl", xs: "4xl" }}
          my="1rem"
        >
          Atif Moin
        </Text>
        <Text fontSize={"lg"}>
          {" "}
          <Typical
            steps={[
              "I am a Web Developer! 💻",
              3000,
              "I am a Graphic Designer🖌️",
              3000,
            ]}
            loop={Infinity}
            from={"I am a"}
          />
        </Text>
        <Text px={{ lg: "2rem", md: "2rem", sm: "0", xs: "0" }} my={"1rem"}>
          Self-motivated and hardworking fresher seeking for an opportunity to
          work in a challenging environment to improve my skills and utilize my
          knowledge & intelligence in the growth of the organization.
        </Text>
        <Flex gap={3}>
          <a href={cv} target="_blank" rel="noreferrer">
            <Button
              my={"2rem"}
              colorScheme="primary"
              _hover={{ bg: "primary.400" }}
            >
              <Text mx=".2rem">Download CV </Text>{" "}
              <AiOutlineDownload size={"20px"} />
            </Button>
          </a>
          {/* <a
            href="https://wa.me/7007136187?text=Hello%20Atif"
            target={"_blank"}
          > */}
          <Button
            my={"2rem"}
            variant="outline"
            _hover={{ bg: "primary.400", color: "#fff" }}
            colorScheme={"primary"}
          >
            <Text mx=".2rem">WhatsApp </Text>{" "}
            <AiOutlineWhatsApp size={"20px"} />
          </Button>
          {/* </a> */}
        </Flex>
      </Box>
      <Box
        width={"300px"}
        border="3px solid primary"
        shadow={"2xl"}
        bgImage={myImage}
        backgroundSize="cover"
        backgroundPosition={"center"}
        height={"500px"}
        borderRadius="500px"
      ></Box>
    </Flex>
  );
};

export default HeroSection;
