import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import MainPageContent from "./MainPageContent";

import DynamicModal from "../Common/DynamicModal";

import { GiChickenOven } from "react-icons/gi";
import { BsFillCupHotFill } from "react-icons/bs";
import BuyNowCard from "../Common/Card/CustomCards/BuyNowCard";
import SkelitonComp from "../Common/skeliton";

const LandingPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

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
      <SkelitonComp>
        <MainPageContent onOpen={onOpen} />
      </SkelitonComp>
    </>
  );
};

export default LandingPage;
