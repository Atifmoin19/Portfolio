import { Flex, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import MainPageContent from "./MainPageContent";
import NavMenue from "./NavManue";

import { IoIosContacts } from "react-icons/io";

import { IoBag, IoDocument, IoPerson } from "react-icons/io5";

const LandingPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const menues = [
    { title: "About", icon: <IoPerson fontSize={"20px"} /> },
    { title: "Resume", icon: <IoDocument fontSize={"20px"} /> },
    { title: "Work", icon: <IoBag fontSize={"20px"} /> },
    { title: "Contact", icon: <IoIosContacts fontSize={"20px"} /> },
  ];
  return (
    <>
      <Grid
        templateColumns={"1.5fr 3.5fr 1fr"}
        minH={"100vh"}
        position={"relative"}
        bg={"linear-gradient(135deg, #216F9C, #153F53)"}
        placeItems={"start"}
      >
        <Flex
          w={"100%"}
          p={"1rem"}
          h={"100vh"}
          alignItems={"center"}
          position={"sticky"}
          top={"0"}
        >
          <PersonalDetails />
        </Flex>
        <Flex w={"100%"} p={"1rem"} h={"200vh"} pt={"4rem"}>
          <MainPageContent currentTab={currentTab} manues={menues} />{" "}
        </Flex>
        <Flex
          w={"100%"}
          p={"1rem"}
          pt={"4rem"}
          h="100vh"
          position={"sticky"}
          top={"0rem"}
        >
          <NavMenue
            menues={menues}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          />
        </Flex>
      </Grid>
    </>
  );
};

export default LandingPage;
