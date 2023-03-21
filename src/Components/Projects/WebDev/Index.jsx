import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Assets/p1.jpg";
import img2 from "../../../Assets/p2.jpg";
import img3 from "../../../Assets/p3.jpg";
import img4 from "../../../Assets/p4.jpg";
import img5 from "../../../Assets/p5.jpg";
import img6 from "../../../Assets/p7.png";
import img7 from "../../../Assets/p8.png";
import img8 from "../../../Assets/p9.png";

const cardsData = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
];

const WebDProjects = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 2000,
    autoplaySpeed: 3000,
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
        <Text textAlign={'center'} color='#fff'> Graphic Design Projects</Text>
      </Box>
    </>
  );
};

export default WebDProjects;
