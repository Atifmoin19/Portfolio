import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import ProjectMain from "../Projects";
import DownloadBtn from "../../Common/Buttons/DownloadBtn";
import { IoDownload } from "react-icons/io5";
import asset from "../../../Assets/assets.png";

const MainPageContent = (props) => {
  const { currentTab, manues } = props;

  return (
    <>
      <Flex
        w={"100%"}
        className="skechBorder"
        h={"100%"}
        rounded={"xl"}
        p={{ lg: "3rem", md: "3rem", sm: "1rem", xs: "1rem" }}
        direction={"column"}
        mb={"6rem"}
      >
        <Flex
          w={"100%"}
          minH={"85vh"}
          zIndex={9}
          direction={"column"}
          justifyContent={"end"}
          pb={"4rem"}
          color={"var(--font_color)"}
        >
          <Flex w={"70%"} justifyContent={"end"}>
            {" "}
            <Image draggable={false} maxW={"400px"} src={asset} />
          </Flex>
          <Text
            background={"var(--gradient_tint)"}
            backgroundClip={"text"}
            fontWeight={"500"}
            fontSize={"40px"}
            // letterSpacing={"4px"}

            // fontStyle={"normal"}
            w={"600px"}
          >
            I'm ATIF MOIN Software Development Engineer A.K.A. Front-End
            Developer
          </Text>
          <Flex>
            <Flex my={"1rem"}>
              <DownloadBtn>
                <Flex alignItems={"center"} gap={2}>
                  <IoDownload />
                  <Text>Download CV</Text>
                </Flex>
              </DownloadBtn>
            </Flex>
          </Flex>
        </Flex>
        <Text
          w={"fit-content"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          h={"fit-content"}
        >
          {manues[0].title}
        </Text>
        <Flex
          w={"100%"}
          zIndex={9}
          direction={"column"}
          color={"var(--font_color)"}
        >
          <About />
        </Flex>
        <Text
          w={"fit-content"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          h={"fit-content"}
        >
          {manues[1].title}
        </Text>
        <Flex w={"100%"} zIndex={9} direction={"column"}>
          <ProjectMain />
        </Flex>
        <Text
          w={"fit-content"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          h={"fit-content"}
        >
          {manues[2].title}
        </Text>
        <Flex w={"100%"} zIndex={9} direction={"column"}>
          <Contact />
        </Flex>
      </Flex>
    </>
  );
};

export default MainPageContent;
