import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/index";

const Login = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.user);

  const toast = useToast();
  const dispatch = useDispatch();
  const user = "atifmoin";
  const password = "191101";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload =
      data.UID.toLowerCase().replaceAll(" ", "") === user &&
      data.Password.replaceAll(" ", "") === password;
    if (payload) {
      dispatch({
        type: "LOGIN",
      });
      localStorage.setItem("userId", user);
      localStorage.setItem("token", "asdfd3e1ghjk2asdasd34567890daa");
      // try {
      //   const docRef = await addDoc(collection(firestore, "todos"), {
      //     name: data.UID,
      //     token: "asdfd3e1ghjk2asdasd34567890daa",
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      //   navigate(`/about/${docRef.id}`);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
      navigate("/dashboard/Admin");
    } else {
      toast({
        position: "bottom-right",
        title: `Invalid-Login`,
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex
        w={"100%"}
        minH="100vh"
        justifyContent={"center"}
        alignItems="center"
      >
        <Flex
          justifyContent={"center"}
          alignItems="center"
          p={"1rem"}
          minW={"25rem"}
          minH="35rem"
          rounded={"xl"}
          bg={"#fff"}
          shadow="2xl"
        >
          <form
            style={{ width: "100%", padding: "0 1rem" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputGroup my={"1rem"} w="100%">
              <Flex direction={"column"} gap="2" w={"100%"}>
                <Text fontWeight={"semi-bold"}> User Id </Text>
                <Input
                  w={"100%"}
                  placeholder="Enter User Id ...."
                  {...register("UID", { required: true })}
                />
                <Text
                  textTransform={"lowercase"}
                  fontSize={"xs"}
                  color="red"
                  display={"none"}
                  px={"1rem"}
                  textAlign={"right"}
                >
                  {errors.UID &&
                    toast({
                      position: "bottom-right",
                      title: `Enter UID`,
                      status: "warning",
                      isClosable: true,
                    })}
                </Text>
              </Flex>
            </InputGroup>

            <InputGroup my={"1rem"}>
              <Flex direction={"column"} gap="2" w={"100%"}>
                <Text fontWeight={"semi-bold"}> Password </Text>
                <Input
                  type={"password"}
                  w={"100%"}
                  placeholder="Enter Password ...."
                  {...register("Password", { required: true })}
                />
                <Text fontSize={"xs"} display="none" color="red">
                  {errors.UID &&
                    toast({
                      position: "bottom-right",
                      title: `Enter Password`,
                      status: "warning",
                      isClosable: true,
                    })}
                </Text>
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
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
