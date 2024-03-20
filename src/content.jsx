import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import ContactFrom from "./Components/ContactForm";
import Login from "./Components/Login";
import Admin from "./Admin";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import NotFound from "./Components/NotFoun";
import LandingPage from "./Components/LandingPage";

const PrivateRoutes = () => {
  const isLogin =
    localStorage.getItem("token") === useSelector((state) => state.token);
  return isLogin ? <Outlet /> : <Navigate to={"/Admin"} replace />;
};

const Content = () => {
  // const { isLoggedIn } = useSelector((state) => state.user);
  // console.log(isLoggedIn, "user");
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Portfolio" element={<HeroSection />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Contact" element={<ContactFrom />} />
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
