import { Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";

import NavMenue from "../../LandingPage/NavManue";
import MainPageContent from "../../LandingPage/MainPageContent";
import React, { useEffect, useState } from "react";
import { IoBag, IoHome, IoPerson } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../App/Hookes";
import DynamicModal from "../DynamicModal";
import { useDispatch } from "react-redux";
import { resertUserDetails } from "../../../store/user.slice";

const SkelitonComp = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState(1);
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const storeData = useAppSelector((state) => state.user);
  const [menues, setMenues] = useState([
    {
      title: "About",
      id: "about",
      icon: "",
      url: "",
    },
    {
      title: "Work",
      id: "work",
      icon: "",
      url: "",
    },
    {
      title: "Contact",
      id: "contact",
      icon: "",
      url: "",
    },
  ]);

  useEffect(() => {
    if (location.pathname !== "/") {
      console.log("hii");
      setMenues([
        {
          title: "Home",
          id: "home",
          icon: <IoHome color="inherit" fontSize={"20px"} />,
          url: "/",
        },
      ]);
    } else {
      if (storeData.token) {
        setMenues([
          {
            title: "About",
            id: "about",
            icon: "",
            url: "",
          },
          {
            title: "Work",
            id: "work",
            icon: "",
            url: "",
          },
          {
            title: "Contact",
            id: "contact",
            icon: "",
            url: "",
          },
          {
            title: "Dashboard",
            id: "dashboard",
            icon: "",
            url: "/dashboard",
          },
        ]);
      } else {
        setMenues([
          {
            title: "About",
            id: "about",
            icon: "",
            url: "",
          },
          {
            title: "Work",
            id: "work",
            icon: "",
            url: "",
          },
          {
            title: "Contact",
            id: "contact",
            icon: "",
            url: "",
          },
        ]);
      }
    }
  }, [storeData.token]);

  return (
    <>
      <DynamicModal
        type="side"
        width={"200px"}
        isCloseIcon
        title={""}
        isOpen={isOpen}
        child={
          <Flex
            direction={"column"}
            minH={"40vh"}
            p={"2rem 1rem"}
            w={"100%"}
            gap={"2rem"}
          >
            {menues.map((item, idx) => {
              return (
                <Flex
                  zIndex={"999"}
                  p={".4rem 1rem"}
                  key={idx}
                  cursor={"pointer"}
                  bg={idx + 1 === currentTab ? "var(--shade2)" : ""}
                  border={idx + 1 === currentTab ? "1px solid #fff" : ""}
                  onClick={() => {
                    if (item.url) {
                      navigate(item.url);
                    }
                    setCurrentTab(idx + 1);
                    onClose();
                  }}
                  color={idx + 1 === currentTab ? "#fff" : "var(--font_color)"}
                  alignItems={"center"}
                  rounded={"md"}
                  // direction={"column"}
                  // bg={idx + 1 === currentTab ? "#0ca5e9" : "gray.100"}
                  gap={2}
                >
                  {item.icon && <Text fontSize={"xs"}> {item?.icon}</Text>}
                  <Text fontSize={"xs"}>{item?.title}</Text>
                </Flex>
              );
            })}

            {storeData.token && (
              <Flex
                zIndex={"999"}
                p={".4rem 1rem"}
                cursor={"pointer"}
                onClick={() => {
                  dispatch(resertUserDetails());
                  onClose();
                }}
                color={"var(--font_color)"}
                alignItems={"center"}
                rounded={"md"}
                gap={2}
              >
                <Text fontSize={"xs"}>Logout</Text>
              </Flex>
            )}
          </Flex>
        }
        dynamicCloser={() => {
          onClose();
        }}
      />
      <Grid
        bg={"var(--theme)"}
        px={{ lg: "4rem", md: "3rem", sm: "1rem", xs: "1rem" }}
        minH={"100vh"}
        position={"relative"}
        placeItems={"start"}
        id={menues[0]?.id}
      >
        <NavMenue
          onOpen={onOpen}
          menues={menues}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />

        {React.cloneElement(children, {
          menues: menues,
          currentTab: currentTab,
        })}
        {}
      </Grid>
    </>
  );
};

export default SkelitonComp;
