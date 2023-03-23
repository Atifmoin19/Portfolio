import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CurrentRoot = () => {
  const navigate = useNavigate();
  var url = window.location.pathname;
  var splitUrl = url.split("/");
  var currentPage = splitUrl[splitUrl.length - 1];
  localStorage.setItem("currentpage", currentPage);
  const cp = localStorage.getItem("currentpage");

  return (
    <Box mt={"5rem"}>
      <Flex width={"100%"} py=".3rem" px={"5rem"} gap="5">
        <Text
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Text>

        {cp === "Portfolio" || cp === "" ? (
          ""
        ) : (
          <Flex alignItems={"center"} gap="5">
            <Text>
              <IoIosArrowForward />
            </Text>
            <Text textTransform={"capitalize"}>{cp}</Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default CurrentRoot;
