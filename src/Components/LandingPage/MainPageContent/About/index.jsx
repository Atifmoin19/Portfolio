import { Button, Flex, Grid, Image, Text, Tooltip } from "@chakra-ui/react";
import React, { useRef } from "react";
import zpr from "../../../../Assets/zpr.svg";
import webDev from "../../../../Assets/Logo/code.png";
import Photography from "../../../../Assets/Logo/photo-camera.png";
import ui_ux from "../../../../Assets/Logo/tool.png";
import figma from "../../../../Assets/Logo/figma.png";
import photoshop from "../../../../Assets/Logo/photoshop.png";
import vscode from "../../../../Assets/Logo/vscode.png";
import xd from "../../../../Assets/Logo/xd.png";
import useInView from "../../../../CustomHooks/useInView";
import AboutCard from "./AboutCard";
import TooltipTools from "./TooltipComp";

const About = () => {
  const skillReff = useRef(null);
  const isInView = useInView({ targetRef: skillReff });
  const EducationDetails = [
    {
      qualification: "Graduation",
      duration: "2019-2023",
      percentage: "60%",
      board: "Inderprastha Engineering College",
    },
    {
      qualification: "Intermediate",
      duration: "2018-2019",
      percentage: "70%",
      board: "St. Xavier's Senior Secondary School",
    },
    {
      qualification: "High School",
      duration: "2016-2017",
      percentage: "70%",
      board: "St. Xavier's Senior Secondary School",
    },
  ];
  const workDetails = [
    { tool: "Web Development", image: webDev, id: 1 },
    { tool: "Photography", image: Photography, id: 2 },
    { tool: "UI/UX", image: ui_ux, id: 3 },
  ];

  const tools = [
    { tool: "Vs Code", link: vscode, id: 1 },
    { tool: "Figma", link: figma, id: 2 },
    { tool: "Photoshop", link: photoshop, id: 3 },
    { tool: "Adobe XD", link: xd, id: 4 },
  ];
  const skills = [
    { skill: "HTML", percentage: "50%" },
    { skill: "CSS", percentage: "90%" },
    { skill: "JS", percentage: "70%" },
    { skill: "React JS/TS", percentage: "70%" },
    { skill: "Angular", percentage: "70%" },
    { skill: "Flutter", percentage: "30%" },
  ];

  return (
    <>
      <Text
        my={"1rem"}
        textAlign={"left"}
        fontSize={{ lg: "16px", md: "16px", sm: "13px", xs: "13px" }}
      >
        Self-motivated and hardworking currently working as an{" "}
        <Text as="span">
          Associate Software Engineeer @
          <Text
            cursor={"pointer"}
            onClick={() => {
              window.open("https://www.zopper.com/");
            }}
            as="span"
            backgroundSize={"contain"}
            bgRepeat={"no-repeat"}
            backgroundPosition={"center"}
            bgImage={zpr}
            // w={"300px"}
            h={"20px"}
            p={"0rem 3rem"}
          ></Text>
        </Text>
        to improve my skills and utilize my knowledge & intelligence in the
        growth of the organization.
      </Text>
      <Text
        my={"1rem"}
        w={"fit-content"}
        fontSize={"24px"}
        fontWeight={"500"}
        h={"fit-content"}
      >
        What I Do!
      </Text>
      <Grid
        templateColumns={{
          lg: "1fr 1fr 1fr",
          md: "1fr 1fr",
          sm: "1fr",
          xs: "1fr",
        }}
        w={"100%"}
        justifyContent={"start"}
        gap={"2rem"}
        p={"1rem 0"}
        alignItems={"start"}
        flexWrap={"wrap"}
      >
        {workDetails?.map((item, idx) => {
          return <AboutCard key={idx} data={item} />;
        })}
      </Grid>

      <Text
        my={"1rem"}
        w={"fit-content"}
        fontSize={"24px"}
        fontWeight={"500"}
        h={"fit-content"}
      >
        Familiar Tools
      </Text>

      <Flex
        w={"100%"}
        p={"1rem 0"}
        justifyContent={"start"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"1rem"}
      >
        {tools.map((item, idx) => {
          return <TooltipTools key={idx} item={item} />;
        })}
      </Flex>

      <Text
        ref={skillReff}
        my={"1rem"}
        w={"fit-content"}
        fontSize={"24px"}
        fontWeight={"500"}
        h={"fit-content"}
      >
        Skills
      </Text>
      {isInView && (
        <Flex direction={"column"} w={"100%"}>
          {skills.map((item, idx) => {
            return (
              <div key={idx} direction={"column"} class="skill-box">
                <Text class="skill">{item.skill}</Text>
                <div class="skill-bar">
                  <span class="skill-per" style={{ width: item.percentage }}>
                    <span class="tooltip">{item.percentage}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </Flex>
      )}
      {!isInView && (
        <Flex direction={"column"} w={"100%"} opacity={1}>
          {skills.map((item, idx) => {
            return (
              <div key={idx} direction={"column"} class="skill-box">
                <Text class="skill">{item.skill}</Text>
                <div class="skill-bar" style={{ animationDuration: "0s" }}>
                  <span
                    class="skill-per"
                    style={{ width: item.percentage, animationDuration: "0s" }}
                  >
                    <span class="tooltip">{item.percentage}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </Flex>
      )}
      <Text
        my={"1rem"}
        w={"fit-content"}
        fontSize={"24px"}
        fontWeight={"500"}
        h={"fit-content"}
      >
        Education
      </Text>
      <Flex direction={"column"} w={"100%"} px={"2rem"}>
        {EducationDetails.map((item, idx) => {
          return (
            <Flex
              key={idx}
              direction={"column"}
              w={"100%"}
              className={
                "stepper" +
                (EducationDetails.length - 1 === idx ? " non-Line" : "")
              }
            >
              <Flex
                w={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                {" "}
                <Text
                  w={"fit-content"}
                  fontSize={{ lg: "20px", md: "20px", sm: "18px", xs: "18px" }}
                  fontWeight={"500"}
                  h={"fit-content"}
                >
                  {item.qualification}
                </Text>
                <Text
                  w={"fit-content"}
                  fontSize={{ lg: "20px", md: "20px", sm: "14px", xs: "14px" }}
                  fontWeight={"500"}
                  h={"fit-content"}
                >
                  {item.duration}
                </Text>
              </Flex>
              <Text
                color={"var(--font_color2)"}
                fontSize={{ lg: "16px", md: "16px", sm: "13px", xs: "13px" }}
              >
                {item.board} with aggregate of {item.percentage}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default About;
