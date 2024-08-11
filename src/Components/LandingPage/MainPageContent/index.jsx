import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import ProjectMain from "../Projects";
import DownloadBtn from "../../Common/Buttons/DownloadBtn";
import { IoDownload } from "react-icons/io5";
import asset from "../../../Assets/assets.png";
import PersonalDetails from "../PersonalDetails";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import Insta from "../../../Assets/Logo/instagram.png";

const MainPageContent = (props) => {
  const { menues, onOpen, currentTab } = props;
  useEffect(() => {
    console.log(currentTab);
    const ele = document.getElementById(menues[currentTab - 1]?.id);
    ele.scrollIntoView({ behavior: "smooth" });
  }, [currentTab]);

  return (
    <>
      <Flex
        h={"100%"}
        rounded={"xl"}
        p={"1rem"}
        direction={"column"}
        mb={"6rem"}
      >
        <Grid
          gridTemplateColumns={{
            lg: "1fr 2fr",
            md: "1fr 1fr",
            sm: "1fr",
            xs: "1fr",
          }}
          w={"100%"}
          placeItems={"center"}
          gap={{ lg: "4rem", md: "2rem", sm: "4rem", xs: "4rem" }}
          flexWrap={"wrap"}
        >
          <PersonalDetails onOpen={onOpen} />
          <Flex
            w={{ lg: "80%", md: "80%", sm: "100%", xs: "100%" }}
            // minH={"85vh"}
            zIndex={9}
            direction={"column"}
            justifyContent={"end"}
            pb={"4rem"}
            color={"var(--font_color)"}
          >
            <Text
              background={"var(--gradient_tint)"}
              backgroundClip={"text"}
              fontWeight={"500"}
              fontSize={"40px"}
              w={{ lg: "600px", md: "500px", sm: "100%", xs: "100%" }}
            >
              I'm ATIF MOIN Software Development Engineer A.K.A. Front-End
              Developer
            </Text>

            <Flex
              alignItems={"center"}
              justifyContent={"start"}
              my={"1rem"}
              gap={"2"}
            >
              <Text
                fontSize={"md"}
                bg={"var(--shade1)"}
                border={"1px solid #e6e6e6"}
                rounded={"md"}
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
                bg={"var(--shade1)"}
                border={"1px solid #e6e6e6"}
                rounded={"md"}
                p={".5rem"}
                cursor={"pointer"}
                transition={".2s ease"}
                _hover={{ transform: "scale(1.3)" }}
              >
                <Image w={"16px"} src={Insta} />
              </Text>

              <Text
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/atif-moin-858167179"
                  );
                }}
                fontSize={"md"}
                bg={"var(--shade1)"}
                border={"1px solid #e6e6e6"}
                rounded={"md"}
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
                bg={"var(--shade1)"}
                border={"1px solid #e6e6e6"}
                rounded={"md"}
                p={".5rem"}
                cursor={"pointer"}
                transition={".2s ease"}
                _hover={{ transform: "scale(1.3)" }}
              >
                <AiFillGithub />
              </Text>
            </Flex>
            <Flex>
              <Flex my={"1rem"}>
                <DownloadBtn
                  icon={<IoDownload />}
                  // isDisabled={true}
                  onClick={(e) => {
                    console.log("");
                  }}
                >
                  <Text>Download CV</Text>
                </DownloadBtn>
              </Flex>
            </Flex>
          </Flex>
        </Grid>

        <Text
          w={"fit-content"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          my={"1rem"}
          h={"fit-content"}
        >
          {menues[0]?.title}
        </Text>
        <Flex
          rounded={"xl"}
          w={"100%"}
          zIndex={9}
          p={"1rem"}
          bg={"var(--shade1)"}
          border={"1px solid"}
          borderColor={"#E6E6E6"}
          direction={"column"}
          color={"var(--font_color)"}
        >
          <About />
        </Flex>
        <Text
          w={"fit-content"}
          id={menues[1]?.id}
          mt={"2rem"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          h={"fit-content"}
        >
          {menues[1]?.title}
        </Text>
        <Flex w={"100%"} zIndex={9} direction={"column"}>
          <ProjectMain />
        </Flex>
        <Text
          w={"fit-content"}
          mt={"2rem"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          h={"fit-content"}
          id={menues[2]?.id}
        >
          {menues[2]?.title}
        </Text>

        <Flex w={"100%"} zIndex={9} direction={"column"}>
          <Contact />
        </Flex>
      </Flex>
    </>
  );
};

export default MainPageContent;
