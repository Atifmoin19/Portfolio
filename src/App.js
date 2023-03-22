import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./content";

function App() {
  return (
    <>
      <BrowserRouter basename="/Portfolio">
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
