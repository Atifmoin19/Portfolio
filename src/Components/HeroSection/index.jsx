import {
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  Slider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import myImage from "../../Assets/myimage.jpeg";
import Typical from "react-typical";
import { AiOutlineDownload, AiOutlineWhatsApp } from "react-icons/ai";
import SkelitonComp from "../Common/skeliton";
import { useNavigate } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import zpr from "../../Assets/zpr.svg";
import StylishCard from "../Common/stylishCard";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RxArrowBottomLeft } from "react-icons/rx";
import { IoLogoJavascript } from "react-icons/io5";

const HeroSection = () => {
  const navigate = useNavigate();
  const [hoverColor, setHoverColor] = useState();
  // window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth",
  // });
  const cards = [
    {
      color: "#61dafb",
      heading: "React JS/TS",
      icon: <FaReact />,
      discription: [
        "Redux Store",
        "React elements",
        "Lifecycle Methods",
        "State Management",
        "JSX / TSX",
        "React Hooks",
        "Props in JSX",
        "React Context",
      ],
    },
    {
      color: "#e96328",
      heading: "HTML / CSS",
      icon: (
        <>
          <FaHtml5 size={"25px"} />
          /
          <FaCss3Alt size={"25px"} />
        </>
      ),

      discription: [
        "CSS syntax",
        "CSS syntax",
        "CSS properties",
        "Box model",
        "Css Cascading Rule",
        "HTML elements",
        "Inheritance",
        "Media queries",
        "Position",
        "3D Designs",
      ],
    },
    {
      color: "#efd81b",
      icon: <IoLogoJavascript />,

      heading: "JS",
      discription: [
        "Async Communication",
        "Dom creation",
        "Dev Tool",
        "Debugging",
        "Scope",
        "Function Calls",
        "Event Handling",
        "Reference & Value variables",
        "Traversing the DOM",
      ],
    },
  ];
  useEffect(() => {
    console.log(hoverColor);
  }, [hoverColor]);

  return (
    <SkelitonComp>
      <Flex
        p={"1rem"}
        px={{ lg: "2rem", md: "1rem", sm: "1rem", xs: ".2rem" }}
        justifyContent={"center"}
        alignItems={{
          lg: "center",
          md: "flex-start",
          sm: "flex-start",
          xs: "flex-start",
        }}
        minH={"80vh"}
        gap="10"
        flexWrap={"wrap"}
      >
        <Box
          width={{
            lg: "calc(100% - 400px)",
            md: "calc(100% - 200px)",
            sm: "100%",
            xs: "100%",
          }}
          height="100%"
        >
          <Text
            fontWeight={"bold"}
            fontSize={{ lg: "6xl", md: "4xl", sm: "4xl", xs: "4xl" }}
          >
            Atif Moin
          </Text>
          <Flex justifyContent={"start"} alignItems={"center"} gap={2}>
            <Text w={"80%"} pr={"2rem"}>
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
                // h={"20px"}
                p={"0rem 3rem"}
              ></Text>
            </Text>
          </Flex>

          <Text
            minW={"300px"}
            maxW={"500px"}
            my={"1rem"}
            textAlign={"justify"}
            pr={"2rem"}
          >
            Self-motivated and hardworking currently working as an
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
          <Flex gap={3}>
            <Button
              onClick={() => {
                navigate("/Contact");
              }}
              my={"2rem"}
              colorScheme="primary"
              _hover={{ bg: "primary.400" }}
            >
              <Text mx=".2rem">Hire Me </Text> <IoMdSend size={"20px"} />
            </Button>

            <a
              href="https://wa.me/7007136187?text=Hello%20Atif"
              target={"_blank"}
            >
              <Button
                my={"2rem"}
                variant="outline"
                _hover={{ bg: "primary.400", color: "#fff" }}
                colorScheme={"primary"}
              >
                <Text mx=".2rem">WhatsApp </Text>{" "}
                <AiOutlineWhatsApp size={"20px"} />
              </Button>
            </a>
          </Flex>
        </Box>
        <Box
          width={"300px"}
          border="3px solid primary"
          shadow={"2xl"}
          bgImage={myImage}
          backgroundSize="cover"
          backgroundPosition={"center"}
          height={"500px"}
          borderRadius="500px"
        ></Box>
      </Flex>

      <Flex
        p={"1rem"}
        px={{ lg: "2rem", md: "1rem", sm: "1rem", xs: ".2rem" }}
        justifyContent={"center"}
        alignItems={{
          lg: "center",
          md: "flex-start",
          sm: "flex-start",
          xs: "flex-start",
        }}
        minH={"80vh"}
        gap="10"
        flexWrap={"wrap"}
      >
        <Flex
          my="2rem"
          w={"100%"}
          bg={"#fff"}
          minH={"50vh"}
          onMouseLeave={() => {
            setHoverColor("#fff");
          }}
          direction={"column"}
          border={"3px solid"}
          borderColor={hoverColor ?? "#ffffff"}
          p={"1rem"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={2}
          rounded={"xl"}
          shadow={"0 0 20px rgba(0,0,0,0.2)"}
        >
          <Text
            my={"1rem"}
            fontWeight={"bold"}
            textTransform={"capitalize"}
            fontSize={"3xl"}
          >
            My Skills
          </Text>
          <Flex
            my={"1rem"}
            w="100%"
            gap={"2rem 1rem"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
          >
            {cards.map((item, idx) => {
              return (
                <Box
                  key={idx}
                  onMouseEnter={() => {
                    setHoverColor(item.color);
                  }}
                >
                  <StylishCard item={item} />
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </SkelitonComp>
  );
};

export default HeroSection;
