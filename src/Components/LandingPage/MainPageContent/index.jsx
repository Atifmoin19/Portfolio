import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import zpr from "../../../Assets/zpr.svg";

const MainPageContent = (props) => {
  const { currentTab, manues } = props;
  return (
    <>
      <Flex
        w={"100%"}
        h={"100%"}
        bg={"#fff"}
        rounded={"xl"}
        p={"2rem"}
        direction={"column"}
      >
        <Text
          w={"fit-content"}
          className="title"
          fontSize={"xl"}
          fontWeight={"bold"}
          h={"fit-content"}
        >
          {manues[currentTab - 1].title}
        </Text>
        {currentTab === 1 ? (
          <>
            <Text my={"1rem"} textAlign={"justify"}>
              Self-motivated and hardworking currently working as an{" "}
              <Text as="span">
                Associate Software Engineeer @
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    window.open("https://www.zopper.com/");
                  }}
                  as="span"
                  backgroundSize={"contain"}
                  bgRepeat={"no-repeat"}
                  backgroundPosition={"center"}
                  bgImage={zpr}
                  // w={"300px"}
                  h={"20px"}
                  p={"0rem 3rem"}
                ></Text>
              </Text>
              to improve my skills and utilize my knowledge & intelligence in
              the growth of the organization.
            </Text>

            <Grid
              templateColumns={"1fr 1fr"}
              w={"100%"}
              justifyContent={"start"}
              gap={"2rem"}
              p={"2rem 0"}
              alignItems={"start"}
              flexWrap={"wrap"}
            >
              <Flex
                w={"100%"}
                p={"2rem"}
                bg={"orange.100"}
                rounded={"md"}
              ></Flex>
              <Flex w={"100%"} p={"2rem"} bg={"blue.100"} rounded={"md"}></Flex>
              <Flex
                w={"100%"}
                p={"2rem"}
                bg={"green.100"}
                rounded={"md"}
              ></Flex>
              <Flex w={"100%"} p={"2rem"} bg={"red.100"} rounded={"md"}></Flex>
            </Grid>
          </>
        ) : currentTab === 2 ? (
          <>
            <Text my={"1rem"} textAlign={"justify"}>
              Self-motivated and hardworking currently working as an{" "}
              <Text as="span">
                Associate Software Engineeer @
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    window.open("https://www.zopper.com/");
                  }}
                  as="span"
                  backgroundSize={"contain"}
                  bgRepeat={"no-repeat"}
                  backgroundPosition={"center"}
                  bgImage={zpr}
                  // w={"300px"}
                  h={"20px"}
                  p={"0rem 3rem"}
                ></Text>
              </Text>
              to improve my skills and utilize my knowledge & intelligence in
              the growth of the organization.
            </Text>

            <Grid
              templateColumns={"1fr 1fr"}
              w={"100%"}
              justifyContent={"start"}
              gap={"2rem"}
              p={"2rem 0"}
              alignItems={"start"}
              flexWrap={"wrap"}
            >
              <Flex w={"100%"} p={"2rem"} rounded={"md"}>
                <div class="card">
                  <div class="content">
                    <p class="para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi laboriosam at voluptas minus culpa deserunt delectus
                      sapiente inventore pariatur
                    </p>
                  </div>
                </div>
              </Flex>

              <Flex w={"100%"} p={"2rem"} rounded={"md"}>
                <div class="card">
                  <div class="content">
                    <p class="para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi laboriosam at voluptas minus culpa deserunt delectus
                      sapiente inventore pariatur
                    </p>
                  </div>
                </div>
              </Flex>

              <Flex w={"100%"} p={"2rem"} rounded={"md"}>
                <div class="card">
                  <div class="content">
                    <p class="para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi laboriosam at voluptas minus culpa deserunt delectus
                      sapiente inventore pariatur
                    </p>
                  </div>
                </div>
              </Flex>

              <Flex w={"100%"} p={"2rem"} rounded={"md"}>
                <div class="card">
                  <div class="content">
                    <p class="para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi laboriosam at voluptas minus culpa deserunt delectus
                      sapiente inventore pariatur
                    </p>
                  </div>
                </div>
              </Flex>
            </Grid>
          </>
        ) : currentTab === 3 ? (
          <>
            <Text my={"1rem"} textAlign={"justify"}>
              Self-motivated and hardworking currently working as an{" "}
              <Text as="span">
                Associate Software Engineeer @
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    window.open("https://www.zopper.com/");
                  }}
                  as="span"
                  backgroundSize={"contain"}
                  bgRepeat={"no-repeat"}
                  backgroundPosition={"center"}
                  bgImage={zpr}
                  // w={"300px"}
                  h={"20px"}
                  p={"0rem 3rem"}
                ></Text>
              </Text>
              to improve my skills and utilize my knowledge & intelligence in
              the growth of the organization.
            </Text>

            <Grid
              templateColumns={"1fr 1fr"}
              w={"100%"}
              justifyContent={"start"}
              gap={"2rem"}
              p={"2rem 0"}
              alignItems={"start"}
              flexWrap={"wrap"}
            >
              <Flex
                w={"100%"}
                p={"2rem"}
                bg={"orange.100"}
                rounded={"md"}
              ></Flex>
              <Flex w={"100%"} p={"2rem"} bg={"blue.100"} rounded={"md"}></Flex>
              <Flex
                w={"100%"}
                p={"2rem"}
                bg={"green.100"}
                rounded={"md"}
              ></Flex>
              <Flex w={"100%"} p={"2rem"} bg={"red.100"} rounded={"md"}></Flex>
            </Grid>
          </>
        ) : (
          <>
            <Text my={"1rem"} textAlign={"justify"}>
              Self-motivated and hardworking currently working as an{" "}
              <Text as="span">
                Associate Software Engineeer @
                <Text
                  cursor={"pointer"}
                  onClick={() => {
                    window.open("https://www.zopper.com/");
                  }}
                  as="span"
                  backgroundSize={"contain"}
                  bgRepeat={"no-repeat"}
                  backgroundPosition={"center"}
                  bgImage={zpr}
                  // w={"300px"}
                  h={"20px"}
                  p={"0rem 3rem"}
                ></Text>
              </Text>
              to improve my skills and utilize my knowledge & intelligence in
              the growth of the organization.
            </Text>

            <Grid
              templateColumns={"1fr 1fr"}
              w={"100%"}
              justifyContent={"start"}
              gap={"2rem"}
              p={"2rem 0"}
              alignItems={"start"}
              flexWrap={"wrap"}
            >
              <Flex
                w={"100%"}
                p={"2rem"}
                bg={"orange.100"}
                rounded={"md"}
              ></Flex>
              <Flex w={"100%"} p={"2rem"} bg={"blue.100"} rounded={"md"}></Flex>
              <Flex
                w={"100%"}
                p={"2rem"}
                bg={"green.100"}
                rounded={"md"}
              ></Flex>
              <Flex w={"100%"} p={"2rem"} bg={"red.100"} rounded={"md"}></Flex>
            </Grid>
          </>
        )}
      </Flex>
    </>
  );
};

export default MainPageContent;
