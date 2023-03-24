import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import SkelitonComp from "../Common/skeliton";
import GraphicDProject from "./GraphicD";
import PhotoGalery from "./PhotoGalery";
import WebDProjects from "./WebDev/Index";

const Projects = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <>
      <SkelitonComp>
        <WebDProjects />
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
      </SkelitonComp>
    </>
  );
};

export default Projects;
