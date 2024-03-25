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
    { title: "About", icon: <IoPerson color="inherit" fontSize={"20px"} /> },
    { title: "Work", icon: <IoBag fontSize={"20px"} /> },
    { title: "Contact Form", icon: <IoIosContacts fontSize={"20px"} /> },
  ];
  return (
    <>
      <Grid
        templateColumns={{
          lg: "1.5fr 3.5fr 1fr",
          md: "1.5fr 3.5fr 1fr",
          sm: "1fr",
          xs: "1fr",
        }}
        minH={"100vh"}
        position={"relative"}
        bg={"linear-gradient(135deg, #216F9C, #153F53)"}
        placeItems={"start"}
        pb={{ lg: "", md: "", sm: "2rem", xs: "8rem" }}
      >
        <Flex
          w={"100%"}
          p={"1rem"}
          minH={"100vh"}
          alignItems={"center"}
          position={{
            lg: "sticky",
            md: "sticky",
            sm: "relative",
            xs: "relative",
          }}
          top={"2rem"}
        >
          <PersonalDetails />
        </Flex>
        <Flex w={"100%"} p={"1rem"} pt={"4rem"}>
          <MainPageContent currentTab={currentTab} manues={menues} />{" "}
        </Flex>
        <Flex
          w={"100%"}
          p={"1rem"}
          pt={"4rem"}
          h={{ lg: "100vh", md: "100vh", sm: "auto", xs: "auto" }}
          position={{
            lg: "sticky",
            md: "sticky",
            sm: "fixed",
            xs: "fixed",
          }}
          top={{ lg: "0", md: "0", sm: "auto", xs: "auto" }}
          bottom={{ lg: "auto", md: "auto", sm: "0", xs: "0" }}
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
