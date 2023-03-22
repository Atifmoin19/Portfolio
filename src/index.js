import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
const theme = extendTheme({
  breakpoints: {
    xs: "300px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
    "3xl": "1600px",
    "4xl": "1800px",
  },
  colors: {
    primary: {
      100: "#D4E6F4",
      200: "#ADCBE9",
      300: "#7496BD",
      400: "#40597B",
      500: "#0D1624",
      600: "#09111E",
      700: "#060C19",
      800: "#040814",
      900: "#020511",
    },
    secondary: {
      100: "#DFFCF6",
      200: "#C0FAF2",
      300: "#9DF2ED",
      400: "#81E2E5",
      500: "#59C7D4",
      600: "#41A0B6",
      700: "#2C7B98",
      800: "#1C5A7A",
      900: "#114165",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter basename="/Portfolio">
      <AppRoutes />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
