import { Box, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsArrowRight, BsBox } from "react-icons/bs";
import dummyImage from "../../../../Assets/dummyImage.png";
import useInView from "../../../../CustomHooks/useInView";

const ProjectCard = (props) => {
  const { data, id, isAnimation } = props;
  const { image, projectType, projectName, link } = data;

  return (
    <>
      <Flex
        flexBasis={{ lg: "auto", md: "auto", sm: "100%", xs: "100%" }}
        position={"relative"}
        className={`projectCardMain slideInAnimation`}
        style={{ animationDelay: `${0.1 * id}s` }}
        w={{ lg: "300px", md: "300px", sm: "100%", md: "100%" }}
        minH={projectName ? "300px" : "fit-content"}
      >
        <Flex className="projectCard"></Flex>
        <Flex
          w={"100%"}
          h={"100%"}
          border={"1px"}
          borderColor={"#e6e6e6"}
          shadow={"md"}
          // minH={projectName ? "350px" : "fit-content"}
          zIndex={4}
          rounded={"xl"}
          bg={"var(--shade1)"}
          color={"gray.600"}
          direction={"column"}
          overflow={"hidden"}
        >
          <Flex w={"100%"} h={"200px"} bg={"var(--shade2)"} overflow={"hidden"}>
            <Image
              transition={".2s ease"}
              src={image ?? dummyImage}
              w={"100%"}
              objectFit={"cover"}
            />
          </Flex>

          {projectName && (
            <Box p={"1rem"}>
              <Flex
                // mt={"2rem"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                {" "}
                <Tooltip label={projectName}>
                  <Text
                    fontWeight={"bold"}
                    color="var(--shade2)"
                    fontSize={{ lg: "xl", md: "xl", sm: "md", xs: "md" }}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                    whiteSpace={"nowrap"}
                  >
                    {projectName ?? ""}
                  </Text>
                </Tooltip>
                <Text
                  ml={{ lg: "1rem", md: "1rem", sm: "1rem", xs: ".6rem" }}
                  cursor={"pointer"}
                  onClick={() => {
                    window.open(link?.project);
                  }}
                  border={"2px solid gray"}
                  rounded={"full"}
                  className="icon"
                >
                  <BsArrowRight fontWeight={"bold"} />
                </Text>
              </Flex>

              {projectType && (
                <Tooltip label={projectType}>
                  <Text
                    color="var(--font_color2)"
                    fontSize={"xs"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                    whiteSpace={"nowrap"}
                  >
                    {projectType ?? ""}
                  </Text>
                </Tooltip>
              )}
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectCard;
