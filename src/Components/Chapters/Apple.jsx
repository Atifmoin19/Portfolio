import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { delay, motion } from "framer-motion";

const Apple = (props) => {
  const { activeId, id } = props;
  const text =
    "Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services.";
  return (
    <Flex
      w={"100%"}
      height={"100%"}
      justifyContent={"end"}
      alignItems={"center"}
      gap={"1rem"}
    >
      <Flex
        ml={"auto"}
        // height={"100%"}
        w={"300px"}
        justifyContent={"start"}
        gap={"4px"}
        alignItems={"center"}
        textAlign={"justify"}
        letterSpacing={"-1px"}
        flexWrap={"wrap"}
        lineHeight={"1.2"}
        margin={"100px 0 40px"}
      >
        {id == activeId &&
          text.split(" ").map((item, idx) => {
            return (
              <motion.span
                transition={{
                  duration: 0.25,
                  delay: idx / 10,
                }}
                key={activeId + idx}
                initial={{
                  y: "-20px",
                  opacity: "0",
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  y: "0px",
                  opacity: "1",
                  filter: "blur(0px)",
                }}
              >
                {item}
              </motion.span>
            );
          })}
      </Flex>
      <Flex
        w={"auto"}
        p={"2rem"}
        direction={"column"}
        pr={"10%"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"100%"}
        overflowX={"visible"}
        overflowY={"hidden"}
        gap={"1rem"}
      >
        {id == activeId && (
          <>
            <motion.div
              key={activeId + "sdfdw "}
              initial={{
                y: "-200%",
                opacity: 0,
                transition: {
                  y: { ease: "easeInOut", duration: ".5", delay: 0 },
                },
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  y: { ease: "easeInOut", duration: ".5", delay: 0.1 },
                },
              }}
            >
              <Flex
                w={"200px"}
                height={"300px"}
                bg={"#fff"}
                rounded={"xl"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"1rem"}
              >
                Apple
              </Flex>
            </motion.div>

            <motion.div
              key={activeId + "sdfsssdw "}
              initial={{
                y: "200%",
                opacity: 0.5,
                transition: {
                  y: { ease: "easeInOut", duration: ".5", delay: 0 },
                },
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  y: { ease: "easeInOut", duration: ".5", delay: 0.2 },
                },
              }}
            >
              <Flex
                w={"200px"}
                height={"200px"}
                bg={"#fff"}
                rounded={"xl"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"1rem"}
              >
                Apple
              </Flex>
            </motion.div>

            <motion.div
              key={activeId + "sdfasdasdasdqwdw "}
              initial={{
                x: "200%",
                opacity: 0.5,
                transition: {
                  x: { ease: "easeInOut", duration: ".5", delay: 0 },
                },
                filter: "blur(10px)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  x: { ease: "easeInOut", duration: ".5", delay: 0.3 },
                },
              }}
            >
              <Flex
                w={"200px"}
                height={"500px"}
                bg={"#fff"}
                rounded={"xl"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"1rem"}
              >
                Apple
              </Flex>
            </motion.div>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Apple;
