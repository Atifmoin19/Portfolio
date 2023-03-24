import {
  Box,
  Flex,
  grid,
  Input,
  InputGroup,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SkelitonComp from "../Common/skeliton";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/index";
import { useNavigate, useParams } from "react-router-dom";

const ContactFrom = () => {
  const { id } = useParams();
  var date = new Date().toLocaleString();
  const [todo, setTodo] = useState([]);

  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fetchPost = async () => {
    await getDocs(collection(firestore, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setTodo(newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const onSubmit = async (data) => {
    const duplicate = todo.find((element) => element.email === data.Email);
    if (duplicate === undefined) {
      try {
        const docRef = await addDoc(collection(firestore, "todos"), {
          fname: data.FirstName,
          lname: data.LastName,
          email: data.Email,
          mobile: data.Mobile,
          message: data.Message,
          date: date,
        });
        toast({
          title: "Successful",
          position: "bottom",
          status: "success",
          description: `Thanks  ${
            " " + data.FirstName + " " + data.LastName
          } for contacting me `,
        });
        navigate("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    if (duplicate !== undefined && answer) {
      var answer = window.confirm("Do you want to send contact again?");
      console.log("ho gaya dopnara");
      try {
        const docRef = await addDoc(collection(firestore, "todos"), {
          fname: data.FirstName,
          lname: data.LastName,
          email: data.Email,
          mobile: data.Mobile,
          message: data.Message,
          date: date,
        });
        toast({
          title: "Successful",
          position: "bottom",
          status: "success",
          description: `Thanks  ${
            " " + data.FirstName + " " + data.LastName
          } for contacting me `,
        });
        navigate("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <SkelitonComp>
      <Flex
        id="#contact"
        justifyContent={"center"}
        alignItems="flex-start"
        minH={"100vh"}
      >
        <Flex
          shadow={"xl"}
          flexWrap="wrap-reverse"
          my={"3rem"}
          minH={"70vh"}
          w={{
            lg: "calc(100% - 200px)",
            md: "calc(100% - 150px)",
            sm: "calc(100% - 100px)",
            xs: "calc(100% - 50px)",
          }}
          bg="#fff"
        >
          <Box
            width={{ lg: "300px", md: "300px", sm: "100%", xs: "100%" }}
            minH={"70vh"}
            bg="primary.500"
          ></Box>
          <Flex
            direction={"column"}
            minH={"70vh"}
            width={{
              lg: "calc(100% - 300px)",
              md: "calc(100% - 300px)",
              sm: "100%",
              xs: "100%",
            }}
            p={{ lg: "3rem", md: "2rem", sm: "1rem", xs: "1rem" }}
          >
            <Text fontWeight={"bold"} fontSize="3xl" my={"1rem"}>
              Contct Form
            </Text>
            <Box justifyContent={"center"} alignItems="center" p={".3rem 2rem"}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup
                  my={"1rem"}
                  w="100%"
                  display={"grid"}
                  gap={9}
                  gridTemplateColumns={{
                    lg: "1fr 1fr",
                    md: "1fr",
                    sm: "1fr",
                    xs: "1fr",
                  }}
                >
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> First Name </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter First Name ...."
                      {...register("FirstName", { required: true })}
                    />
                  </Flex>
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Last name </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter Last name ...."
                      {...register("LastName", { required: true })}
                    />
                  </Flex>
                </InputGroup>

                <InputGroup
                  my={"1rem"}
                  w="100%"
                  display={"grid"}
                  gap={9}
                  gridTemplateColumns={{
                    lg: "1fr 1fr",
                    md: "1fr",
                    sm: "1fr",
                    xs: "1fr",
                  }}
                >
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Mobile </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter Mobile ...."
                      {...register("Mobile", { required: true })}
                    />
                  </Flex>
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Email </Text>
                    <Input
                      w={"100%"}
                      placeholder="Enter Email ...."
                      {...register("Email", { required: true })}
                    />
                  </Flex>
                </InputGroup>

                <InputGroup
                  my={"1rem"}
                  w="100%"
                  display={"grid"}
                  gap={9}
                  gridTemplateColumns="1fr"
                >
                  <Flex direction={"column"} gap="2" w={"100%"}>
                    <Text fontWeight={"semi-bold"}> Message </Text>
                    <Textarea
                      resize={"none"}
                      w={"100%"}
                      placeholder="Enter Message ...."
                      {...register("Message", { required: true })}
                    />
                  </Flex>
                </InputGroup>
                <InputGroup
                  my={"2rem"}
                  w={"100%"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Input
                    cursor={"pointer"}
                    bg={"primary.500"}
                    color="#fff"
                    w={"200px"}
                    type="submit"
                  />
                </InputGroup>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </SkelitonComp>
  );
};

export default ContactFrom;
