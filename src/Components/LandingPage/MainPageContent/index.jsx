import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import About from "./About";
import Contact from "./Contact";

const MainPageContent = (props) => {
  const { currentTab, manues } = props;

  return (
    <>
      <Flex
        w={"100%"}
        h={"100%"}
        bg={"#fff"}
        rounded={"xl"}
        p={{ lg: "3rem", md: "3rem", sm: "1rem", xs: "1rem" }}
        direction={"column"}
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
          <About />
        ) : currentTab === 2 ? (
          <></>
        ) : currentTab === 3 ? (
          <Contact />
        ) : (
          <></>
        )}
      </Flex>
    </>
  );
};

export default MainPageContent;
