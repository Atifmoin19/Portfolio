import { Box } from "@chakra-ui/react";
import React from "react";
import FollowMe from "../../FollowMe";
import Footer from "../../Footer";
import Header from "../../Header";
import CurrentRoot from "../../Header/CurrentRoot";

const SkelitonComp = ({ children }) => {
  return (
    <>
      <Box minH="100vh" position={"relative"} width="100%" overflow={"hidden"}>
        <FollowMe />
        <Header />
        <CurrentRoot />
        <Box
          className="contentbody"
          px={{ lg: "2rem", md: "2rem", sm: "2rem", xs: "1.2rem" }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default SkelitonComp;
