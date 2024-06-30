import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import dummyImage from "../../../../Assets/dummyImage.png";
import useInView from "../../../../CustomHooks/useInView";

const ProjectCard = (props) => {
  const { data, id, isAnimation } = props;
  const { image, projectType, projectName, link } = data;

  return (
    <div>
      <Flex
        position={"relative"}
        className={`projectCardMain slideInAnimation`}
        style={{ animationDelay: `${0.1 * id}s` }}
        w={{ lg: "300px", md: "300px", sm: "100%", md: "100%" }}
        minH={projectName ? "350px" : "fit-content"}
      >
        <Flex className="projectCard"></Flex>
        <Flex
          w={"100%"}
          h={"100%"}
          border={"1px"}
          borderColor={"var(--font_color)"}
          shadow={"md"}
          minH={projectName ? "350px" : "fit-content"}
          zIndex={4}
          rounded={"xl"}
          bg={"var(--shade2)"}
          p={"1rem"}
          color={"gray.600"}
          direction={"column"}
        >
          <Flex
            w={"100%"}
            h={"200px"}
            rounded={"md"}
            bg={"var(--shade2)"}
            overflow={"hidden"}
          >
            <Image
              transition={".2s ease"}
              src={image ?? dummyImage}
              w={"100%"}
              objectFit={"cover"}
            />
          </Flex>

          {projectName && (
            <Flex
              mt={"2rem"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {" "}
              <Text
                fontWeight={"bold"}
                color="var(--font_color)"
                fontSize={"xl"}
              >
                {projectName ?? ""}
              </Text>
              <Text
                cursor={"pointer"}
                onClick={() => {
                  window.open(link?.project);
                }}
                border={"2px solid gray"}
                p={"5px"}
                rounded={"full"}
                className="icon"
              >
                <BsArrowRight fontWeight={"bold"} />
              </Text>
            </Flex>
          )}
          {projectType && (
            <Text color="var(--font_color2)" fontSize={"xs"} pr={"2rem"}>
              {projectType ?? ""}
            </Text>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default ProjectCard;
