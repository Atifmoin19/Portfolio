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
import SkelitonComp from "../Common/skeliton";
import { updateUserDetails } from "../../store/user.slice";

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
      dispatch(updateUserDetails());
      navigate("/dashboard");
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
      <SkelitonComp>
        <Flex
          w={"100%"}
          minH="70vh"
          justifyContent={"center"}
          alignItems="center"
        >
          <Flex
            justifyContent={"center"}
            alignItems="center"
            p={"1rem"}
            minW={"20rem"}
            minH="25rem"
            rounded={"xl"}
            bg={"#fff"}
            backdropFilter="blurr(40%)"
            direction="column"
            shadow="2xl"
          >
            <Text fontWeight={"bold"} fontSize="xl" my={"1rem"}>
              Login
            </Text>
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
      </SkelitonComp>
    </>
  );
};

export default Login;
