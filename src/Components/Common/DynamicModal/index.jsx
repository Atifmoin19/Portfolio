import { Box, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";

import React, { Children, ReactNode, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDeviceType } from "../../../App/Hookes/useDeviceType";
import { IoIosCloseCircle } from "react-icons/io";

const DynamicModal = (props) => {
  const { isDesktop } = useDeviceType();
  const { onClose } = useDisclosure();
  const {
    isOpen,
    dynamicCloser,
    position,

    button,
    closeClickOutside = false,
    child,
    type = "side",
    isCloseIcon = false,
    showClose = true,
    title,
    footer,
    secondaryFooter,
    width = "420px",
  } = props;
  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (isOpen) {
      body[0].style.overflow = "hidden";
      return;
    }
    body[0].style.overflow = "auto";

    // body
  }, [isOpen]);
  return (
    <Flex
      w={"100%"}
      height={"100%"}
      position={"fixed"}
      // top={0}
      // left={0}
      opacity={isOpen ? 1 : 0}
      zIndex={isOpen ? "999" : "-222"}
      // opacity={isOpen ? '1' : '0'}
      bg={isOpen ? "rgba(0,0,0,0.6)" : "none"}
      transition={".2s"}
      backdropFilter={isOpen ? "blur(2px)" : "blur(0)"}
      // p={'2rem'}
    >
      <Flex
        flex={1}
        onClick={() => (closeClickOutside ? dynamicCloser() : console.log(""))}
      ></Flex>
      <Flex
        transformOrigin={"center"}
        transform={
          type === "center" && isOpen
            ? position === "Bottom"
              ? "translate(-50%,0%) scale(1)"
              : "translate(-50%,-50%) scale(1)"
            : type === "side" && isOpen
            ? "translateX(0%)"
            : type === "side" && !isOpen
            ? "translateX(100%)"
            : type === "center" && !isOpen
            ? position === "Bottom"
              ? "translate(-50%,50%) scale(1)"
              : "translate(-50%,-50%) scale(0)"
            : ""
        }
        transition={".2s"}
        direction={"column"}
        bg={type === "side" ? "#fff" : "transparent"}
        w={
          type === "side"
            ? { lg: width, md: width, sm: "100%", xs: "100%" }
            : position === "Bottom"
            ? { lg: width, md: width, sm: "100%", xs: "100%" }
            : { lg: width, md: width, sm: "100%", xs: "100%" }
        }
        left={type === "center" ? "50%" : "0"}
        top={type === "center" ? (position === "Bottom" ? "" : "50%") : "0"}
        bottom={type === "center" ? (position === "Bottom" ? "0%" : "") : "0"}
        position={type === "side" ? "relative" : "absolute"}
        rounded={
          type === "center" ? (position === "Bottom" ? "xl" : "xl") : "0"
        }
        height={type === "side" ? "100%" : "auto"}
        p={type === "center" ? (position === "Bottom" ? "1rem" : "1rem") : "0"}
      >
        {type === "center" ? (
          <Box
            bg={"#fff"}
            w={"100%"}
            rounded={type === "center" ? "2xl" : "0"}
            overflow="hidden"
            position={"relative"}
          >
            {/* {isCloseIcon && (
              <Text
                top={0}
                right={0}
                m={'1rem 1rem'}
                position={'absolute'}
                w={'100%'}
                textAlign={type === 'center' ? 'right' : 'left'}
              >
                <CloseIcon onClick={() => dynamicCloser()} cursor={'pointer'} fontSize='14px' />
              </Text>
            )} */}

            {isCloseIcon && (
              <Flex p={"1rem"} w={"100%"}>
                <Flex
                  w={"100%"}
                  bg={"tertiary.500"}
                  p={"1rem"}
                  rounded={"xl"}
                  justifyContent={title ? "space-between" : "end"}
                  alignItems={"center"}
                >
                  {title}
                  {showClose && (
                    <Text
                      cursor={"pointer"}
                      onClick={() => dynamicCloser()}
                      textAlign={type === "center" ? "right" : "left"}
                      position={"relative"}
                    >
                      <IoIosCloseCircle
                        top={"50%"}
                        left={"50%"}
                        transform={"translate(-50%,-50%)"}
                        position={"absolute"}
                        fontSize={"31px"}
                      />
                    </Text>
                  )}
                </Flex>
              </Flex>
            )}

            <Flex
              height={isDesktop ? "100%" : "100%"}
              direction={"column"}
              justifyContent={"start"}
              alignItems={"start"}
            >
              <Flex
                p={"0rem 1rem"}
                overflowY={"scroll"}
                direction={"column"}
                width={"100%"}
                height={"100%"}
              >
                {isOpen ? child : ""}
              </Flex>
              <>
                {button && isOpen ? (
                  <Flex
                    justifyContent={"center"}
                    p={".7rem 1rem"}
                    boxShadow={"0 -10px 15px rgba(0,0,0,0.1)"}
                    alignItems={"center"}
                    bg={"#fff"}
                  >
                    {button}
                  </Flex>
                ) : (
                  ""
                )}
              </>
            </Flex>
          </Box>
        ) : (
          <>
            <Grid
              templateColumns={"1fr"}
              templateRows={"1fr 70px"}
              position={"relative"}
              height={"100%"}
              // direction={'column'}
              // justifyContent={'space-between'}
            >
              <Flex
                overflowY={"scroll"}
                direction={"column"}
                width={"100%"}
                height={"100%"}
                p={"1rem 1rem"}
              >
                {isCloseIcon && (
                  <Flex p={"1rem .3rem"} w={"100%"}>
                    <Flex
                      w={"100%"}
                      bg={"tertiary.500"}
                      rounded={"xl"}
                      p={"1rem"}
                      justifyContent={title ? "space-between" : "end"}
                      alignItems={"center"}
                    >
                      <Text justifySelf={"center"}>{title}</Text>
                      {showClose && (
                        <Text
                          rounded={"full"}
                          cursor={"pointer"}
                          onClick={() => dynamicCloser()}
                          textAlign={"center"}
                          position={"relative"}
                        >
                          <IoIosCloseCircle
                            top={"50%"}
                            left={"50%"}
                            transform={"translate(-50%,-50%)"}
                            position={"absolute"}
                            fontSize={"31px"}
                          />
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                )}
                {isOpen ? child : ""}
              </Flex>
              {button ? (
                <>
                  {button && isOpen ? (
                    <Flex
                      w={"100%"}
                      height={"100%"}
                      justifyContent={"center"}
                      boxShadow={"0 -10px 15px rgba(0,0,0,0.1)"}
                      alignItems={"center"}
                    >
                      {button}
                    </Flex>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  {/* {secondaryFooter} */}
                  {/* <Flex
                    justifyContent={'center'}
                    p={'.7rem 1rem'}
                    boxShadow={'0 -10px 15px rgba(0,0,0,0.1)'}
                    alignItems={'center'}
                    bg={'#fff'}
                  >
                    {footer}
                  </Flex> */}
                </>
              )}
            </Grid>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default DynamicModal;
