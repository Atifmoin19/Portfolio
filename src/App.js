import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContactFrom from "./Components/ContactForm";
import FollowMe from "./Components/FollowMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import { Routes, Route } from "react-router-dom";
import CurrentRoot from "./Components/Header/CurrentRoot";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    var url = window.location.pathname;
    var splitUrl = url.split("/");
    var currentPage = splitUrl[splitUrl.length - 1];
    console.log(currentPage);
    setCurrentPage(currentPage);
  }, []);

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
            <Route>
              <Route path="" element={<HeroSection />} />
              <Route path="Project" element={<Projects />} />
              <Route path="Contact" element={<ContactFrom />} />
            </Route>
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
