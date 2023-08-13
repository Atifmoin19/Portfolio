import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardFlip from "../../Common/Card";
import p1 from "../../../Assets/Webprojects/p1.png";
import p2 from "../../../Assets/Webprojects/p2.png";
import p3 from "../../../Assets/Webprojects/p3.png";
import p4 from "../../../Assets/Webprojects/p4.png";
import p5 from "../../../Assets/Webprojects/p5.png";
import p6 from "../../../Assets/Webprojects/p6.png";

const WebDProjects = () => {
  const flipcardData = [
    {
      src: p1,
      title: "Techicious",
      discription: "A Freelancing Project (Work under Process.)",
      link: "https://techicious.github.io/Techicious-Web/",
    },
    {
      src: p2,
      title: "Count ME",
      discription: "Live Character Counter",
      link: "https://atifmoin19.github.io/Live-char-counter/",
    },
    {
      src: p3,
      title: "Play Me",
      discription: "A Music Player App",
      link: "https://atifmoin19.github.io/MusicPlayer/",
    },
    {
      src: p4,
      title: "Netflix&Chill",
      discription: "A Customized Netflix Clone.",
      link: "https://atifmoin19.github.io/netflix/",
    },
    {
      src: p5,
      title: "RedStore",
      discription: "An E-Commerce Website Design",
      link: "https://atifmoin19.github.io/E-commers-site/Mysite/indext.html",
    },
    {
      src: p6,
      title: "GlassMorphism",
      discription: "Compnent Baes on glassmorphism.",
      link: "https://atifmoin19.github.io/card-hover-animation/",
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
