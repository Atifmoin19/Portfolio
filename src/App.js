import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./content";

function App() {
  useEffect(() => {
    localStorage.setItem("currentpage", "");
  }, []);

  return (
    <>
      <BrowserRouter basename="/Portfolio">
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
