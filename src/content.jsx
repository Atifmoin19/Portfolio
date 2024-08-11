import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import ContactFrom from "./Components/ContactForm";
import Login from "./Components/Login";
import Admin from "./Admin";

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import NotFound from "./Components/NotFoun";
import LandingPage from "./Components/LandingPage";
import TestComp from "./TestComp";
import { useAppSelector } from "./App/Hookes";

const PrivateRoutes = () => {
  const isLogin = useAppSelector((state) => state.user.token);
  return isLogin ? <Outlet /> : <Navigate to={"/"} replace />;
};

const Content = () => {
  // const { isLoggedIn } = useSelector((state) => state.user);
  // console.log(isLoggedIn, "user");
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        {/* <Route path="/test" element={<TestComp />} /> */}
        {/* <Route path="/Portfolio" element={<HeroSection />} /> */}
        {/* <Route path="/Project" element={<Projects />} /> */}
        {/* <Route path="/Contact" element={<ContactFrom />} /> */}
        <Route path="/Admin" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Content;
