import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CircleComponent from "./Components/CircleComponent";
import ComponentRenderer from "./Components/ComponentRenderer";
import Apple from "./Components/Chapters/Apple";
import { useDeviceType } from "./App/Hookes/useDeviceType";

const TestComp = () => {
  const { isDesktop } = useDeviceType();
  const [activeId, setActiveId] = useState(0);
  const circleData = [
    {
      data: <Apple activeId={activeId} id={0} />,
      title: "chapter 1",
      image:
        "https://img.freepik.com/free-photo/top-side-view-fruits-three-yellow-reddish-apples-grey-wooden-table_140725-117409.jpg?t=st=1722933936~exp=1722937536~hmac=f771a03bafcac7746b1053a328bf351012e314586b2c1fe2eebad11f90bfbce2&w=1800",
      id: 0,
    },
    {
      data: <Apple activeId={activeId} id={1} />,
      title: "chapter 2",
      image:
        "https://img.freepik.com/free-photo/exotic-fruits-pattern_23-2151535707.jpg?t=st=1722933990~exp=1722937590~hmac=ba98fd666ed3c5990ac5151d356bc17d285d0cdf995cbc1fa6ef11e38ae33ef1&w=1800",
      id: 1,
    },
    {
      data: <Apple activeId={activeId} id={2} />,
      title: "chapter 3",
      image:
        "https://img.freepik.com/free-photo/grapes-wicker-basket-high-angle-view-grey-plaster_176474-10442.jpg?t=st=1722934018~exp=1722937618~hmac=768d063c6d4a26578d0d82065d11c72e00c2db22265f4bcbb4fbb0a43114609e&w=1800",
      id: 2,
    },
    {
      data: <Apple activeId={activeId} id={3} />,
      title: "chapter 4",
      image:
        "https://img.freepik.com/free-photo/mush-fruits-table_23-2147667305.jpg?t=st=1722934047~exp=1722937647~hmac=96af6186d7826b851891b2bb284c0829f89c6a2a96641c743dda6ab8e6e3796b&w=1800",
      id: 3,
    },
    {
      data: <Apple activeId={activeId} id={4} />,
      title: "chapter 5",
      image:
        "https://img.freepik.com/free-photo/orange-from-garden_1150-9680.jpg?t=st=1722934072~exp=1722937672~hmac=f7f427fcefdd8f8f3ba564b9ba068b9643a26fd41ed0d8628ad2e73cc1f7c822&w=1800",
      id: 4,
    },
  ];
  const fixAngle = 360 / circleData.length;

  const width = isDesktop ? 1000 : 600;
  useEffect(() => {
    const items = document.querySelectorAll(".circle-item");
    const numItems = items.length;

    const radius = width / (isDesktop ? 2.5 : 3.5); // Radius of the circle

    items.forEach((item, index) => {
      // Calculate the angle for this item
      const angle = (360 / numItems) * index;

      // Apply CSS transform to position the item
      item.style.transform = `rotate(${angle - 30}deg) translateX(${
        radius + 100
      }px) rotate(${-angle + (activeId - 1) * fixAngle}deg)`;
    });
  }, [activeId]);
  console.log(activeId);

  return (
    <>
      <Box
        justifyContent={"center"}
        position={"relative"}
        direction={"column"}
        alignItems={"center"}
        className="scroll-body"
        w={"100%"}
        overflowY={"scroll"}
        h={"100vh"}
      >
        {/* <Box
          w={"100%"}
          height={"100%"}
          bg={"red"}
          position={"sticky"}
          top={0}
          left={0}
          direction={"column"}
          backdropFilter={"blur(10px)"}
          background="rgba(255, 255, 255, 0.4)"
          zIndex={"99"}
        ></Box> */}
        <CircleComponent
          circleData={circleData}
          fixAngle={fixAngle}
          activeId={activeId}
          width={width}
        />

        {circleData.map((item, idx) => {
          return (
            <ComponentRenderer
              setActiveId={setActiveId}
              key={item.id}
              data={item}
            />
          );
        })}
      </Box>
    </>
  );
};

export default TestComp;
