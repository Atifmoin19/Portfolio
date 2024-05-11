import { Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
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
    { title: "About", icon: <IoPerson color="inherit" fontSize={"20px"} /> },
    { title: "Work", icon: <IoBag fontSize={"20px"} /> },
    { title: "Contact", icon: <IoIosContacts fontSize={"20px"} /> },
  ];

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
        bg={"var(--shade2)"}
        templateColumns={{
          lg: "1fr 3fr",
          md: "1fr 3fr",
          sm: "1fr",
          xs: "1fr",
        }}
        minH={"100vh"}
        position={"relative"}
        placeItems={"start"}
      >
        <Flex
          w={"100%"}
          p={"1rem"}
          pt={"5rem"}
          minH={"100vh"}
          top={0}
          position={{
            lg: "sticky",
            md: "sticky",
            sm: "relative",
            xs: "relative",
          }}
        >
          <PersonalDetails onOpen={onOpen} />
        </Flex>
        <Flex w={"100%"} direction={"column"} position={"relative"}>
          <NavMenue
            menues={menues}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          />
          <MainPageContent currentTab={currentTab} manues={menues} />{" "}
        </Flex>
      </Grid>
    </>
  );
};

export default LandingPage;
