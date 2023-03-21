import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Assets/Clicks/1.jpeg";
import img2 from "../../../Assets/Clicks/2.jpeg";
import img3 from "../../../Assets/Clicks/3.jpeg";
import img4 from "../../../Assets/Clicks/4.jpeg";
import img5 from "../../../Assets/Clicks/5.jpeg";

import img7 from "../../../Assets/Clicks/7.jpeg";
import img8 from "../../../Assets/Clicks/8.jpeg";
import img9 from "../../../Assets/Clicks/9.jpeg";
import img10 from "../../../Assets/Clicks/10.jpeg";
import img11 from "../../../Assets/Clicks/11.jpeg";
import img12 from "../../../Assets/Clicks/6.jpeg";
import img13 from "../../../Assets/Clicks/13.jpeg";
import img14 from "../../../Assets/Clicks/14.jpeg";
import img15 from "../../../Assets/Clicks/15.jpeg";
import img16 from "../../../Assets/Clicks/16.jpeg";
import img17 from "../../../Assets/Clicks/17.jpeg";
import img18 from "../../../Assets/Clicks/18.jpeg";
import img19 from "../../../Assets/Clicks/19.jpeg";
import img20 from "../../../Assets/Clicks/20.jpeg";
import img21 from "../../../Assets/Clicks/21.jpeg";

const cardsData = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img7 },
  { image: img8 },
  { image: img9 },
  { image: img10 },
  { image: img11 },
  { image: img12 },
  { image: img13 },
  { image: img14 },
  { image: img15 },
  { image: img16 },
  { image: img17 },
  { image: img18 },
  { image: img19 },
  { image: img20 },
  { image: img21 },
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
