import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const BuyNowCard = (props) => {
  const {
    data: { title, discription, price },
  } = props;
  return (
    <>
      <Flex
        cursor={"pointer"}
        shadow={"0 0 7px rgba(0,0,0,0.2)"}
        _hover={{
          transform: "scale(1.1)",
          shadow: "-5px 5px 7px rgba(0,0,0,0.2)",
        }}
        w="200px"
        transition={".2s ease"}
        direction={"column"}
        transformOrigin={"left"}
        p={"1rem"}
        rounded={"xl"}
      >
        <Flex className="innerhoverCustomCard"></Flex>
        <Text zIndex={2} fontWeight={"bold"}>
          {title}
        </Text>
        <Text zIndex={2} fontSize={"xs"} opacity={"1"}>
          {discription}
        </Text>
        <Text zIndex={2} fontWeight={"bold"}>
          ₹ {parseInt(price.toString()).toLocaleString("en-IN")}
        </Text>
      </Flex>
    </>
  );
};

export default BuyNowCard;
