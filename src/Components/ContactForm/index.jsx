import {
  Box,
  Button,
  Flex,
  grid,
  Image,
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
import contactImage from "../../Assets/contact.png";

const ContactFrom = () => {
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
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            p={"1rem"}
            width={{ lg: "400px", md: "400px", sm: "100%", xs: "100%" }}
            minH={"70vh"}
            bg="primary.500"
          >
            <Image src={contactImage} />
          </Flex>
        </Flex>
      </Flex>
    </SkelitonComp>
  );
};

export default ContactFrom;
