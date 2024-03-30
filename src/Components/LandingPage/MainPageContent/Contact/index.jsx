import {
  Box,
  Button,
  Flex,
  Input,
  useToast,
  Image,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  emailRegex,
  mobileNumRegex,
  onlyAllowTypingAlphabet,
  onlyAllowTypingNumbers,
} from "../../../general";
import LoaderButton from "../../../Common/Buttons/LoaderButton";
import SendButton from "../../../Common/Buttons/SendButton";

const Contact = () => {
  const { id } = useParams();
  var date = new Date().toLocaleString();
  const [todo, setTodo] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

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
    setIsLoding(true);
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
        setIsLoding(false);
        navigate("/");
      } catch (e) {
        toast({
          title: e,
          position: "bottom",
          status: "error",
        });
        setIsLoding(false);
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
        setIsLoding(false);
        navigate("/");
      } catch (e) {
        setIsLoding(false);
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <>
      <Flex
        w={"100%"}
        direction={"column"}
        p={{ lg: "3rem", md: "2rem", sm: ".5rem", xs: ".5rem" }}
      >
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
                <Text fontWeight={"semi-bold"}>
                  {" "}
                  First Name{" "}
                  <Text as="span" color={"red"}>
                    *
                  </Text>
                </Text>

                <Input
                  onKeyDown={onlyAllowTypingAlphabet}
                  w={"100%"}
                  placeholder="Enter First Name"
                  {...register("FirstName", {
                    required: true,
                    pattern: /^(?!\s).+(?<!\s)$/,
                  })}
                  className={
                    errors &&
                    (errors.FirstName?.type === "pattern" ||
                      errors.FirstName?.type === "required")
                      ? "inputCustom"
                      : ""
                  }
                />
                {/* {JSON.stringify(errors)} */}
                {errors && errors.FirstName?.type === "pattern" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Invalid First Name
                  </Text>
                )}

                {errors && errors.FirstName?.type === "required" && (
                  <Text color={"red"} fontSize={"10px"}>
                    First Name is Required
                  </Text>
                )}
              </Flex>
              <Flex direction={"column"} gap="2" w={"100%"}>
                <Text fontWeight={"semi-bold"}>
                  {" "}
                  Last Name{" "}
                  <Text as="span" color={"red"}>
                    *
                  </Text>
                </Text>
                <Input
                  onKeyDown={onlyAllowTypingAlphabet}
                  w={"100%"}
                  placeholder="Enter Last Name"
                  {...register("LastName", {
                    required: true,
                    pattern: /^(?!\s).+(?<!\s)$/,
                  })}
                  className={
                    errors &&
                    (errors.LastName?.type === "pattern" ||
                      errors.LastName?.type === "required")
                      ? "inputCustom"
                      : ""
                  }
                />
                {errors && errors.LastName?.type === "pattern" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Invalid Last Name
                  </Text>
                )}

                {errors && errors.LastName?.type === "required" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Last Name is Required
                  </Text>
                )}
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
                <Text fontWeight={"semi-bold"}>
                  {" "}
                  Mobile{" "}
                  <Text as="span" color={"red"}>
                    *
                  </Text>{" "}
                </Text>
                <Input
                  maxLength={10}
                  onKeyDown={onlyAllowTypingNumbers}
                  w={"100%"}
                  placeholder="Enter Mobile Number"
                  {...register("Mobile", {
                    required: true,
                    pattern: mobileNumRegex,
                  })}
                  className={
                    errors &&
                    (errors.Mobile?.type === "pattern" ||
                      errors.Mobile?.type === "required")
                      ? "inputCustom"
                      : ""
                  }
                />{" "}
                {errors && errors.Mobile?.type === "pattern" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Invalid Mobile Number
                  </Text>
                )}
                {errors && errors.Mobile?.type === "required" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Mobile Number is Required
                  </Text>
                )}
              </Flex>
              <Flex direction={"column"} gap="2" w={"100%"}>
                <Text fontWeight={"semi-bold"}>
                  {" "}
                  Email{" "}
                  <Text as="span" color={"red"}>
                    *
                  </Text>
                </Text>
                <Input
                  w={"100%"}
                  type="email"
                  placeholder="Enter Email"
                  {...register("Email", {
                    required: true,
                    pattern: emailRegex,
                  })}
                  className={
                    errors &&
                    (errors.Email?.type === "pattern" ||
                      errors.Email?.type === "required")
                      ? "inputCustom"
                      : ""
                  }
                />

                {errors && errors.Email?.type === "pattern" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Invalid Email
                  </Text>
                )}
                {errors && errors.Email?.type === "required" && (
                  <Text color={"red"} fontSize={"10px"}>
                    Email is Required
                  </Text>
                )}
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
              <SendButton
                w={"fit-content"}
                type="submit"
                isLoding={isLoding}
                colorScheme="primary"
              >
                Submit
              </SendButton>
            </InputGroup>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
