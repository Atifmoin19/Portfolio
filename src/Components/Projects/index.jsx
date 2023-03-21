import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import GraphicDProject from "./GraphicD";
import PhotoGalery from "./PhotoGalery";

const Projects = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <Flex
      id="#project"
      justifyContent={"center"}
      rounded="md"
      alignItems="center"
      my={"3rem"}
      p="2rem"
      bg={"primary.500"}
      shadow="md"
      direction="column"
    >
      <Text fontSize={"3xl"} color="#fff">
        Projects
      </Text>
      {/* <WebDProjects /> */}
      <GraphicDProject />
      <PhotoGalery />
    </Flex>
  );
};

export default Projects;
