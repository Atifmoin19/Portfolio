import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handelNavMenue = (cp) => {
    setToggle(false);
    navigate("/" + cp);
    localStorage.setItem("currentpage", cp);
  };

  return (
    <>
      <Flex
        width={"100%"}
        position={"fixed"}
        zIndex={9999}
        direction={"column"}
        p="1rem"
        px={{ lg: "10rem", md: "10rem", sm: "6rem", xs: "4rem" }}
        bg="#fff"
        shadow={"md"}
      >
        <Flex
          zIndex={3}
          bg="#fff"
          width={"100%"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Box
            w={"40px"}
            onClick={() => {
              handelNavMenue("");
            }}
          >
            <img src={logo} alt="Logo" />
          </Box>

          <Box
            cursor={"pointer"}
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <RxCross2 size={"30px"} />
            ) : (
              <AiOutlineMenu size={"30px"} />
            )}
          </Box>
        </Flex>
        <Flex
          zIndex={1}
          position="absolute"
          bg={"#fff"}
          top="0"
          right={toggle ? 0 : "-100%"}
          height="100vh"
          transition=".2s linear"
          justifyContent={"center"}
          alignItems="center"
          gap={"4rem"}
          w={"100%"}
          direction="column"
          textAlign={"center"}
        >
          <Text
            onClick={() => {
              handelNavMenue("Project");
            }}
            cursor={"pointer"}
            className="Menu"
            data-descr="Project"
            w={"100%"}
            fontSize={{ lg: "xl", md: "lg", sm: "md", xs: "sm" }}
          >
            Project
          </Text>

          <Text
            cursor={"pointer"}
            className="Menu"
            data-descr="Contact"
            w="100%"
            fontSize={{ lg: "xl", md: "lg", sm: "md", xs: "sm" }}
            onClick={() => {
              handelNavMenue("Contact");
            }}
          >
            Contact
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
