import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardFlip from "../../Common/Card";
import p1 from "../../../Assets/Webprojects/p1.png";

const WebDProjects = () => {
  const flipcardData = [
    {
      src: p1,
      title: "Techicious",
      discription: "A Freelancing Project (Work under Process.)",
      link: "https://techicious.github.io/Techicious-Web/",
    },
    {
      src: p1,
      title: "Techicious",
      discription: "A Freelancing Project",
      link: "https://techicious.github.io/Techicious-Web/",
    },
    {
      src: p1,
      title: "Techicious",
      discription: "A Freelancing Project",
      link: "https://techicious.github.io/Techicious-Web/",
    },
    {
      src: p1,
      title: "Techicious",
      discription: "A Freelancing Project",
      link: "https://techicious.github.io/Techicious-Web/",
    },
    {
      src: p1,
      title: "Techicious",
      discription: "A Freelancing Project",
      link: "https://techicious.github.io/Techicious-Web/",
    },
  ];
  return (
    <>
      <Box w={"100%"}>
        <Text
          my={"2rem"}
          textAlign={"center"}
          fontWeight="bold"
          fontSize={"xl"}
        >
          Major Projects
        </Text>
        <Flex minW={"100%"} p={"1rem"} my={"2rem"} gap="10" overflow="scroll">
          {flipcardData.map((item, index) => {
            return (
              <CardFlip
                key={index}
                imgsrc={item.src}
                discription={item.discription}
                title={item.title}
                link={item.link}
              />
            );
          })}
        </Flex>

        <Text
          my={"2rem"}
          textAlign={"center"}
          fontWeight="bold"
          fontSize={"xl"}
        >
          Other Projects
        </Text>
      </Box>
    </>
  );
};

export default WebDProjects;
