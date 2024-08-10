import { Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import MainPageContent from "./MainPageContent";
import NavMenue from "./NavManue";
import DynamicModal from "../Common/DynamicModal";

import { IoIosContacts } from "react-icons/io";

import { IoBag, IoDocument, IoPerson } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { BsFillCupHotFill } from "react-icons/bs";
import BuyNowCard from "../Common/Card/CustomCards/BuyNowCard";

const LandingPage = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const { isOpen, onClose, onOpen } = useDisclosure();
  const menues = [
    {
      title: "About",
      id: "about",
      icon: <IoPerson color="inherit" fontSize={"20px"} />,
    },
    { title: "Work", id: "work", icon: <IoBag fontSize={"20px"} /> },
    {
      title: "Contact",
      id: "contact",
      icon: <IoIosContacts fontSize={"20px"} />,
    },
  ];

  useEffect(() => {
    const ele = document.getElementById(menues[currentTab - 1].id);
    ele.scrollIntoView({ behavior: "smooth" });
  }, [currentTab]);

  const buyNowData = [
    {
      title: (
        <Flex alignItems={"center"} gap={2}>
          <Text>Lunch/Dinner</Text>
          <GiChickenOven />
        </Flex>
      ),
      discription:
        "asdsad asdsa das das da d as dasdasasd asdasdasd asdasdas da sda as",
      price: "500",
    },
    {
      title: (
        <Flex alignItems={"center"} gap={2}>
          <Text>Chicken Fry</Text>
          <GiChickenOven />
        </Flex>
      ),
      discription:
        "asdsad asdsa das das da d as dasdasasd asdasdasd asdasdas da sda as",
      price: "250",
    },
    {
      title: (
        <Flex alignItems={"center"} gap={2}>
          <Text>Chai</Text>
          <BsFillCupHotFill />
        </Flex>
      ),
      discription:
        "asdsad asdsa das das da d as dasdasasd asdasdasd asdasdas da sda as",
      price: "100",
    },
  ];
  return (
    <>
      <DynamicModal
        type="center"
        width={"600px"}
        isCloseIcon
        title={
          <Text m={0} fontSize={"xl"} mx={"auto"} fontWeight={"bold"}>
            Buy me a...
          </Text>
        }
        isOpen={isOpen}
        child={
          <Flex direction={"column"} minH={"40vh"} p={"2rem 1rem"} w={"100%"}>
            <Flex
              w={"100%"}
              gap={"2rem"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {buyNowData.map((item, idx) => {
                return <BuyNowCard key={idx} data={item} />;
              })}
            </Flex>
          </Flex>
        }
        dynamicCloser={() => {
          onClose();
        }}
      />
      <Grid
        bg={"var(--theme)"}
        px={{ lg: "4rem", md: "3rem", sm: "1rem", xs: "1rem" }}
        minH={"100vh"}
        position={"relative"}
        placeItems={"start"}
        id={menues[0]?.id}
      >
        <NavMenue
          menues={menues}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
        <MainPageContent
          currentTab={currentTab}
          manues={menues}
          onOpen={onOpen}
        />{" "}
      </Grid>
    </>
  );
};

export default LandingPage;
