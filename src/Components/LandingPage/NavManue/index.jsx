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
        gap={"2rem"}
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
              bg={"var(--theme)"}
              border={"1px solid #fff"}
              onClick={() => {
                setCurrentTab(idx + 1);
              }}
              alignItems={"center"}
              rounded={"full"}
              direction={"column"}
              // bg={idx + 1 === currentTab ? "#0ca5e9" : "gray.100"}
              gap={1}
            >
              {" "}
              <Text color={"var(--font_color)"} fontSize={"xs"}>
                {item.title}
              </Text>
            </Flex>
          );
        })}
        <Flex
          position={"absolute"}
          top={"50%"}
          transform={"translate(0,-50%)"}
          right={"10%"}
          fontSize={"xs"}
        >
          <ToggleSwitch
            bg="green.500"
            // defaultKey={"Active"}
            defaultKey={theme === "light" ? "Active" : "Inactive"}
            label1={"Light"}
            label2={"Dark"}
            onToggle={(newval) => {
              setTheme(newval ? "light" : "dark");
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default NavMenue;
