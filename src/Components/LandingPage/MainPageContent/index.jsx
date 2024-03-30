import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import ProjectMain from "../Projects";

const MainPageContent = (props) => {
  const { currentTab, manues } = props;

  return (
    <>
      <Flex
        w={"100%"}
        shadow={"md"}
        className="skechBorder"
        h={"100%"}
        bg={"#fff"}
        rounded={"xl"}
        p={{ lg: "3rem", md: "3rem", sm: "1rem", xs: "1rem" }}
        direction={"column"}
        mb={"6rem"}
      >
        <Text
          w={"fit-content"}
          className="title"
          fontSize={"28px"}
          fontWeight={"bold"}
          h={"fit-content"}
        >
          {manues[currentTab - 1].title}
        </Text>
        {currentTab === 1 ? (
          <Flex w={"100%"} zIndex={9} direction={"column"}>
            <About />
          </Flex>
        ) : currentTab === 2 ? (
          <Flex w={"100%"} zIndex={9} direction={"column"}>
            <ProjectMain />
          </Flex>
        ) : currentTab === 3 ? (
          <Flex w={"100%"} zIndex={9} direction={"column"}>
            <Contact />
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
};

export default MainPageContent;
