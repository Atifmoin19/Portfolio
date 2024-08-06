import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useDeviceType } from "../App/Hookes/useDeviceType";

const CircleComponent = (props) => {
  const { circleData, width, activeId, fixAngle } = props;
  const { isDesktop } = useDeviceType();
  console.log(circleData[activeId]?.id, activeId);
  return (
    <>
      <Flex
        zIndex={"9999"}
        w={`${width / 2}px`}
        h={`${width / 2}px`}
        top={"0%"}
        left={"0%"}
        position={"fixed"}
        rounded={"100%"}
        justifyContent={"center"}
        transform={isDesktop ? `translate(-0% ,-30%) ` : "translate(-0% ,-30%)"}
        alignItems={"center"}
      >
        <motion.div
          key={activeId}
          initial={{ y: -100, filter: "blur(4px)", x: isDesktop ? -100 : -50 }}
          animate={{
            y: isDesktop ? 0 : -20,
            x: isDesktop ? -100 : -50,
            filter: "blur(0px)",
          }}
        >
          <Text
            textTransform={"uppercase"}
            w={"100%"}
            fontWeight={"bold"}
            color={"rgb(0, 107, 141)"}
            fontSize={"3xl"}
          >
            {circleData[activeId]?.title}
          </Text>
        </motion.div>
      </Flex>
      <Flex
        position={"fixed"}
        zIndex={"999"}
        rounded={"100%"}
        top={"0%"}
        left={"0%"}
        background="rgba(255, 255, 255, 0.5)"
        border="1px solid rgba(255, 255, 255, 0.8)"
        backdropFilter={"blur(10px)"}
        justifyContent={"center"}
        alignItems={"center"}
        transition={".4s cubic-bezier(0.64, 0.57, 0.67, 1.53)"}
        transform={`translate(-50% ,-50%) rotate(${
          (activeId - 1) * -fixAngle
        }deg)`}
        shadow={"xl"}
        w={`${width}px`}
        h={`${width}px`}
        className="circle-container"
      >
        {circleData.map((item, idx) => {
          return (
            <Flex
              position={"absolute"}
              w={"200px"}
              h={"200px"}
              top={isDesktop ? "42%" : "35%"}
              zIndex={99}
              left={isDesktop ? "42%" : "35%"}
              background={"#fff"}
              color={"#000"}
              filter={activeId !== item.id ? "blur(4px)" : ""}
              justifyContent={"center"}
              alignItems={"center"}
              rounded={"full"}
              transformOrigin={"center"}
              key={idx}
              // opacity={activeId === item.id ? "1" : "0.3"}
              className="circle-item"
              overflow={"hidden"}
              objectFit={"cover"}
              border={"3px solid #fff"}
              shadow={"inset 10px"}
            >
              <Image
                w={"100%"}
                height={"100%"}
                objectPosition={"center"}
                objectFit={"cover"}
                src={item.image}
                alt={item.title}
              />
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default CircleComponent;
