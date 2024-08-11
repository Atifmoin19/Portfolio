import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ToggleSwitch from "../../Common/ToggleSwitch";
import { useDispatch } from "react-redux";
import {
  resertUserDetails,
  updateSelectedTheme,
} from "../../../store/user.slice";
import { useAppSelector } from "../../../App/Hookes";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeviceType } from "../../../App/Hookes/useDeviceType";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavMenue = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDesktop } = useDeviceType();
  const storeData = useAppSelector((store) => store.user);

  const [theme, setTheme] = useState(storeData.theme);
  const { setCurrentTab, currentTab, menues, onOpen } = props;
  const handelThemeChange = () => {
    const classList = document.getElementById("root").classList;
    classList.remove("light");
    classList.remove("dark");
    classList.add(theme);
  };
  useEffect(() => {
    dispatch(updateSelectedTheme(theme));
    handelThemeChange();
  }, [theme]);

  return (
    <>
      <Flex
        position={"sticky"}
        top={0}
        zIndex={99}
        backdropFilter={"blur(5px)"}
        gap={"1rem"}
        p={isDesktop ? "1rem" : "1.5rem 1rem"}
        left={0}
        justifyContent={isDesktop ? "start" : "end"}
        w={"100%"}
      >
        {isDesktop &&
          menues.map((item, idx) => {
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
        {!isDesktop && (
          <Flex>
            <GiHamburgerMenu color="var(--font_color)" onClick={onOpen} />
          </Flex>
        )}
        <Flex
          position={"absolute"}
          top={"50%"}
          transform={"translate(0,-50%)"}
          right={isDesktop ? "0%" : "auto"}
          left={isDesktop ? "auto" : "0%"}
          gap={3}
          alignItems={"center"}
          fontSize={"xs"}
        >
          <ToggleSwitch
            bg="var(--shade2)"
            defaultKey={theme === "dark" ? "Active" : "Inactive"}
            label2={"Light"}
            label1={"Dark"}
            onToggle={(newval) => {
              setTheme(newval ? "dark" : "light");
            }}
          />
          {storeData.token && isDesktop && (
            <Button
              size={"xs"}
              onClick={() => {
                dispatch(resertUserDetails());
              }}
            >
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default NavMenue;
