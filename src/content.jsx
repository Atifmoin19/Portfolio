import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ContactFrom from "./Components/ContactForm";
import FollowMe from "./Components/FollowMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CurrentRoot from "./Components/Header/CurrentRoot";

const Content = () => {
  const [currentPage, setCurrentPage] = useState("");
  var url = window.location.pathname;
  var splitUrl = url.split("/");
  var currentPagep = splitUrl[splitUrl.length - 1];
  console.log(currentPagep, "mane page");

  return (
    <>
      <Box minH="100vh" position={"relative"} width="100%" overflow={"hidden"}>
        <FollowMe />
        <Header />
        <CurrentRoot setpage={setCurrentPage} currentPage={currentPage} />
        <Box
          className="contentbody"
          px={{ lg: "2rem", md: "2rem", sm: "2rem", xs: "1.2rem" }}
        >
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/Portfolio" element={<HeroSection />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/Contact" element={<ContactFrom />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Content;
