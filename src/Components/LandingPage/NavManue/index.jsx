import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ToggleSwitch from "../../Common/ToggleSwitch";
import { useDispatch } from "react-redux";
import {
  updateSelectedTheme,
  updateUserDetails,
} from "../../../store/user.slice";
import { useAppSelector } from "../../../App/Hookes";

const NavMenue = (props) => {
  const dispatch = useDispatch();
  const storeData = useAppSelector((store) => store.user);

  const [theme, setTheme] = useState(storeData.theme);
  const { setCurrentTab, currentTab, menues } = props;
  const handelThemeChange = () => {
    console.log(theme);
    console.log(document.getElementById("root").classList);
    const classList = document.getElementById("root").classList;
    classList.remove("light");
    classList.remove("dark");
    classList.add(theme);
  };
  useEffect(() => {
    dispatch(updateUserDetails());
    dispatch(updateSelectedTheme(theme));
    handelThemeChange();
  }, [dispatch, theme]);

  return (
    <>
      <Flex
        position={"sticky"}
        top={0}
        zIndex={99}
        backdropFilter={"blur(5px)"}
        gap={"1rem"}
        p={"1rem"}
        left={0}
        w={"100%"}
        bg={"transparent"}
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
                setCurrentTab(idx + 1);
              }}
              color={idx + 1 === currentTab ? "#fff" : "var(--font_color)"}
              alignItems={"center"}
              rounded={"md"}
              direction={"column"}
              // bg={idx + 1 === currentTab ? "#0ca5e9" : "gray.100"}
              gap={1}
            >
              {" "}
              <Text fontSize={"xs"}>{item.title}</Text>
            </Flex>
          );
        })}
        <Flex
          position={"absolute"}
          top={"50%"}
          transform={"translate(0,-50%)"}
          right={"0%"}
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
        </Flex>
      </Flex>
    </>
  );
};

export default NavMenue;
