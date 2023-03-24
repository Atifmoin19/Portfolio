import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SkelitonComp from "./Components/Common/skeliton";

const Admin = () => {
  return (
    <>
      <SkelitonComp>
        <Box minH={"100vh"}>''</Box>
      </SkelitonComp>
    </>
  );
};

export default Admin;
