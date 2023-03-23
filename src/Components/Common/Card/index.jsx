import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CardFlip = (props) => {
  const { title, imgsrc, discription, link } = props;

  const handelLinkClick = () => {
    window.open(link);
  };
  return (
    <>
      <Box
        cursor={"pointer"}
        className="outerbox"
        position={"relative"}
        minW={"25rem"}
        h="15rem"
        bg="transparent"
        rounded="2xl"
      >
        <Box className="innerflip" rounded="2xl">
          <Box
            className="commonflip"
            rounded="2xl"
            bgImage={imgsrc}
            backgroundSize="cover"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          ></Box>
          <Box
            className="commonflip"
            rounded="2xl"
            backgroundSize="cover"
            display={"flex"}
            flexDirection="column"
            bg="#fff"
            justifyContent="center"
            alignItems={"center"}
            overflow="hidden"
            transform="rotateY(180deg)"
          >
            <Text fontWeight="bold" my={"1rem"}>
              {title}
            </Text>
            <Text fontSize={"sm"}>{discription}</Text>
            <Box fontSize={"sm"} my="1rem">
              <Button
                colorScheme={"primary"}
                onClick={() => {
                  handelLinkClick();
                }}
              >
                Link <IoMdArrowDropright />{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardFlip;
