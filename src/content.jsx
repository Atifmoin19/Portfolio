import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ContactFrom from "./Components/ContactForm";
import FollowMe from "./Components/FollowMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";

import {
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import CurrentRoot from "./Components/Header/CurrentRoot";
import Login from "./Components/Login";
import Admin from "./Admin";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const isLogin =
    localStorage.getItem("token") === useSelector((state) => state.token);
  return isLogin ? <Outlet /> : <Navigate to={"/Login"} replace />;
};

const Content = () => {
  // const { isLoggedIn } = useSelector((state) => state.user);
  // console.log(isLoggedIn, "user");
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
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/Portfolio" element={<HeroSection />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/Contact" element={<ContactFrom />} />
            <Route path="/Login" element={<Login />} />

            <Route path="/dashboard" element={<PrivateRoutes />}>
              <Route path="Admin" element={<Admin />} />
            </Route>
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Content;
