import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Portfolio/*" element={<App />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
