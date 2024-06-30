import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import useInView from "../../../../CustomHooks/useInView";

const AboutCard = (props) => {
  const { data } = props;
  const targetRef = useRef(null);
  const isInView = useInView({ targetRef });

  return (
    <div ref={targetRef}>
      {isInView && (
        <div
          className={isInView ? "slideInAnimation" : ""}
          style={{ animationDelay: `${data.id * 0.1}s` }}
        >
          <Flex
            className="hoverCards"
            direction={"column"}
            justifyContent={"center"}
            p={"1rem"}
            alignItems={"center"}
          >
            <Flex w={"100%"} justifyContent={"center"}>
              {" "}
              {/* <Button className="custombutton">
      {" "}
      <Text color={"var(--theme)"}> Projects</Text>
    </Button> */}
              <Image h={"45px"} src={data?.image} />
            </Flex>
            <Text fontSize={"24px"} fontWeight={"400"} my={"1rem"}>
              {data?.tool}
            </Text>
          </Flex>
        </div>
      )}
      {!isInView && (
        <div style={{ opacity: 0 }}>
          <Flex
            className="hoverCards"
            direction={"column"}
            justifyContent={"center"}
            p={"1rem"}
            alignItems={"center"}
          >
            <Flex w={"100%"} justifyContent={"center"}>
              {" "}
              {/* <Button className="custombutton">
      {" "}
      <Text color={"var(--theme)"}> Projects</Text>
    </Button> */}
              <Image h={"45px"} src={data?.image} />
            </Flex>
            <Text fontSize={"24px"} fontWeight={"400"} my={"1rem"}>
              {data?.tool}
            </Text>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default AboutCard;
