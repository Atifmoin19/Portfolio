import { Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import zpr from "../../../../Assets/zpr.svg";
import webDev from "../../../../Assets/Logo/code.png";
import Photography from "../../../../Assets/Logo/photo-camera.png";
import ui_ux from "../../../../Assets/Logo/tool.png";

const About = () => {
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
      <Text my={"1rem"} textAlign={"left"}>
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
        templateColumns={{ lg: "1fr 1fr", md: "1fr 1fr", sm: "1fr", xs: "1fr" }}
        w={"100%"}
        justifyContent={"start"}
        gap={"2rem"}
        p={"1rem 0"}
        alignItems={"start"}
        flexWrap={"wrap"}
      >
        <Flex
          className="hoverCards"
          direction={"column"}
          justifyContent={"center"}
          p={"1rem"}
          alignItems={"center"}
        >
          <Flex w={"100%"} justifyContent={"space-between"}>
            {" "}
            <Button className="custombutton">
              {" "}
              <Text> Projects</Text>
            </Button>
            <Image h={"45px"} src={webDev} />
          </Flex>
          <Text fontSize={"24px"} fontWeight={"400"} my={"1rem"}>
            Web Development
          </Text>
          <Text fontWeight={300}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
            adipisci voluptates. Qui explicabo accusantium incidunt iusto quod
            aspernatur? Nemo nihil cumque quod voluptatem numquam cupiditate
            asperiores illum officia similique?
          </Text>
        </Flex>

        <Flex
          className="hoverCards"
          direction={"column"}
          justifyContent={"center"}
          p={"1rem"}
          alignItems={"center"}
        >
          <Flex w={"100%"} justifyContent={"space-between"}>
            {" "}
            <Button className="custombutton">
              {" "}
              <Text> Projects</Text>
            </Button>
            <Image h={"45px"} src={Photography} />
          </Flex>
          <Text fontSize={"24px"} fontWeight={"400"} my={"1rem"}>
            Photography
          </Text>
          <Text fontWeight={300}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
            adipisci voluptates. Qui explicabo accusantium incidunt iusto quod
            aspernatur? Nemo nihil cumque quod voluptatem numquam cupiditate
            asperiores illum officia similique?
          </Text>
        </Flex>
        <Flex
          className="hoverCards"
          direction={"column"}
          justifyContent={"center"}
          p={"1rem"}
          alignItems={"center"}
        >
          <Flex w={"100%"} justifyContent={"space-between"}>
            {" "}
            <Button className="custombutton">
              {" "}
              <Text> Projects</Text>
            </Button>
            <Image h={"45px"} src={ui_ux} />
          </Flex>
          <Text fontSize={"24px"} fontWeight={"400"} my={"1rem"}>
            UI/UX
          </Text>
          <Text fontWeight={300}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus
            adipisci voluptates. Qui explicabo accusantium incidunt iusto quod
            aspernatur? Nemo nihil cumque quod voluptatem numquam cupiditate
            asperiores illum officia similique?
          </Text>
        </Flex>
      </Grid>
      <Text
        my={"1rem"}
        w={"fit-content"}
        fontSize={"24px"}
        fontWeight={"500"}
        h={"fit-content"}
      >
        Skills
      </Text>
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
                  fontSize={"20px"}
                  fontWeight={"500"}
                  h={"fit-content"}
                >
                  {item.qualification}
                </Text>
                <Text
                  w={"fit-content"}
                  fontSize={"16px"}
                  fontWeight={"500"}
                  h={"fit-content"}
                >
                  {item.duration}
                </Text>
              </Flex>
              <Text color={"gray.600"} fontSize={"16px"}>
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
