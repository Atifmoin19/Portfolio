import React from "react";
import ProjectCard from "../../Common/Card/CustomCards/ProjectCard";
import p0 from "../../../Assets/Webprojects/p0.png";
import p1 from "../../../Assets/Webprojects/p1.png";
import p2 from "../../../Assets/Webprojects/p2.png";
import p3 from "../../../Assets/Webprojects/p3.png";
import p4 from "../../../Assets/Webprojects/p4.png";
import p5 from "../../../Assets/Webprojects/p5.png";
import p6 from "../../../Assets/Webprojects/p6.png";
import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import photo1 from "../../../Assets/Clicks/1.jpeg";
import photo2 from "../../../Assets/Clicks/2.jpeg";
import photo3 from "../../../Assets/Clicks/3.jpeg";
import photo4 from "../../../Assets/Clicks/4.jpeg";
import photo5 from "../../../Assets/Clicks/5.jpeg";

import photo7 from "../../../Assets/Clicks/7.jpeg";
import photo8 from "../../../Assets/Clicks/8.jpeg";
import photo9 from "../../../Assets/Clicks/9.jpeg";
import photo10 from "../../../Assets/Clicks/10.jpeg";
import photo11 from "../../../Assets/Clicks/11.jpeg";
import photo12 from "../../../Assets/Clicks/6.jpeg";
import photo13 from "../../../Assets/Clicks/13.jpeg";
import photo14 from "../../../Assets/Clicks/14.jpeg";
import photo15 from "../../../Assets/Clicks/15.jpeg";
import photo16 from "../../../Assets/Clicks/16.jpeg";
import photo17 from "../../../Assets/Clicks/17.jpeg";
import photo18 from "../../../Assets/Clicks/18.jpeg";
import photo19 from "../../../Assets/Clicks/19.jpeg";
import photo20 from "../../../Assets/Clicks/20.jpeg";
import photo21 from "../../../Assets/Clicks/21.jpeg";

const photoData = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo7 },
  { image: photo8 },
  { image: photo9 },
  { image: photo10 },
  { image: photo11 },
  { image: photo12 },
  { image: photo13 },
  { image: photo14 },
  { image: photo15 },
  { image: photo16 },
  { image: photo17 },
  { image: photo18 },
  { image: photo19 },
  { image: photo20 },
  { image: photo21 },
];

const ProjectMain = () => {
  const flipcardData = [
    {
      image: p0,
      projectName: "Nested Comment and Reply",
      projectType: "Machine Coding Round Question Solution.",
      link: {
        code: "",
        project: "https://react-zgw1gz.stackblitz.io",
      },
    },

    {
      image: p1,
      projectName: "Techicious",
      projectType: "A Freelancing Project (Work under Process.)",
      link: {
        code: "",
        project: "https://techicious.github.io/Techicious-Web/",
      },
    },
    {
      image: p2,
      projectName: "Count ME",
      projectType: "Live Character Counter",
      link: {
        code: "",
        project: "https://atifmoin19.github.io/Live-char-counter/",
      },
    },
    {
      image: p3,
      projectName: "Play Me",
      projectType: "A Music Player App",
      link: { code: "", project: "https://atifmoin19.github.io/MusicPlayer/" },
    },
    {
      image: p4,
      projectName: "Netflix&Chill",
      projectType: "A Customized Netflix Clone.",
      link: { code: "", project: "https://atifmoin19.github.io/netflix/" },
    },
    {
      image: p5,
      projectName: "RedStore",
      projectType: "An E-Commerce Website Design",
      link: {
        code: "",
        project:
          "https://atifmoin19.github.io/E-commers-site/Mysite/indext.html",
      },
    },
    {
      image: p6,
      projectName: "GlassMorphism",
      projectType: "Compnent Baes on glassmorphism.",
      link: {
        code: "",
        project: "https://atifmoin19.github.io/card-hover-animation/",
      },
    },
  ];

  return (
    <>
      <Tabs variant="unstyled" padding={"1rem 0"} w={"100%"}>
        <TabList
          position={"relative"}
          rounded={"full"}
          mb="1em"
          w={"100%"}
          bg={"var(--shade1)"}
          color={"var(--font_color)"}
          p={".4rem"}
        >
          <Tab
            w={"100%"}
            _selected={{ color: "#fff" }}
            zIndex={3}
            fontSize={"xs"}
            rounded={"full"}
          >
            Web Development
          </Tab>
          <Tab
            w={"100%"}
            _selected={{ color: "#fff" }}
            zIndex={3}
            fontSize={"xs"}
          >
            Photography
          </Tab>

          <TabIndicator
            bg={"var(--gradient_tint)"}
            h={"20px"}
            rounded={"full"}
            p={"1rem"}
            top={"50%"}
            left={"0%"}
            transform={"translate(0%,-50%)"}
          />
        </TabList>

        <TabPanels>
          <TabPanel p={0} m={0}>
            <Flex
              bg={"var(--shade1)"}
              w={"100%"}
              maxH={"80rem"}
              flexWrap={"wrap"}
              overflowY={"scroll"}
              gap={"1rem"}
              p={"1rem"}
              justifyContent={"center"}
              alignItems={"start"}
            >
              {flipcardData.map((item, idx) => {
                return <ProjectCard data={item} key={idx} />;
              })}
            </Flex>
          </TabPanel>
          <TabPanel p={0} m={0}>
            <Flex
              bg={"var(--shade1)"}
              maxH={"80rem"}
              overflowY={"scroll"}
              w={"100%"}
              flexWrap={"wrap"}
              gap={"1rem"}
              p={"1rem"}
              justifyContent={"center"}
              alignItems={"start"}
            >
              {photoData.map((item, idx) => {
                return <ProjectCard data={item} key={idx} />;
              })}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ProjectMain;
