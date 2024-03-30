import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from "../../../Assets/Clicks/1.jpeg";
import photo2 from "../../../Assets/Clicks/2.jpeg";
import photo3 from "../../../Assets/Clicks/3.jpeg";
import photo4 from "../../../Assets/Clicks/4.jpeg";
import photo5 from "../../../Assets/Clicks/5.jpeg";

import photo7 from "../../../Assets/Clicks/7.jpeg";
import photo8 from "../../../Assets/Clicks/8.jpeg";
import photo9 from "../../../Assets/Clicks/9.jpeg";
import photo10 from "../../../Assets/Clicks/10.jpeg";
import photo11 from "../../../Assets/Clicks/11.jpeg";
import photo12 from "../../../Assets/Clicks/6.jpeg";
import photo13 from "../../../Assets/Clicks/13.jpeg";
import photo14 from "../../../Assets/Clicks/14.jpeg";
import photo15 from "../../../Assets/Clicks/15.jpeg";
import photo16 from "../../../Assets/Clicks/16.jpeg";
import photo17 from "../../../Assets/Clicks/17.jpeg";
import photo18 from "../../../Assets/Clicks/18.jpeg";
import photo19 from "../../../Assets/Clicks/19.jpeg";
import photo20 from "../../../Assets/Clicks/20.jpeg";
import photo21 from "../../../Assets/Clicks/21.jpeg";

const cardsData = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo7 },
  { image: photo8 },
  { image: photo9 },
  { image: photo10 },
  { image: photo11 },
  { image: photo12 },
  { image: photo13 },
  { image: photo14 },
  { image: photo15 },
  { image: photo16 },
  { image: photo17 },
  { image: photo18 },
  { image: photo19 },
  { image: photo20 },
  { image: photo21 },
];

const PhotoGalery = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "-100px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box className="slidershadow">
        <Slider {...settings}>
          {cardsData.map((item, index) => {
            return (
              <Box key={index}>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  overflow="hidden"
                  my={"5rem"}
                  mx={"3rem"}
                  zIndex="1"
                  opacity={0.6}
                  rounded="md"
                  width={{
                    lg: "300px",
                    md: "300px",
                    sm: "300px",
                    xs: "200px",
                  }}
                  height={{
                    lg: "200px",
                    md: "200px",
                    sm: "200px",
                    xs: "120px",
                  }}
                  className="Services_card"
                >
                  <img
                    width="100%"
                    object-position="center"
                    src={item.image}
                    alt={"image"}
                  />
                </Flex>
              </Box>
            );
          })}
        </Slider>
        <Text textAlign={"center"} color="#fff">
          {" "}
          Photography
        </Text>
      </Box>
    </>
  );
};

export default PhotoGalery;
