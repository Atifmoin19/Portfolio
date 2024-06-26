import {
  Box,
  Flex,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SkelitonComp from "./Components/Common/skeliton";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";

import { firestore } from "./firebase";

const Admin = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const [lastDoc, setLastDoc] = useState(null);
  const [loding, setLoading] = useState(false);

  const fetchPost = async () => {
    const todoRef = collection(firestore, "todos");
    const queryRef = query(todoRef, orderBy("date"));

    await getDocs(queryRef).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const lastDoc =
        querySnapshot.docs[querySnapshot.docs.length - 1]?.data().date;
      setLastDoc(lastDoc);
      setTodo(newData);
    });
  };

  useEffect(() => {
    fetchPost();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, [page]);
  let cats = [];
  cats = todo.map((q) => q.email);
  // newar = todo.filter((item) => !newar.includes(item.email));

  return (
    <>
      <SkelitonComp>
        <Flex minH={"100vh"} justifyContent="center" alignItems={"center"}>
          <TableContainer
            minH={"100vh"}
            my="2rem"
            bg={"#fff"}
            shadow="2xl"
            rounded="2xl"
            w={"calc(100% - 100px)"}
          >
            <Table
              fontSize={"sm"}
              overflowX={"scroll"}
              variant="striped"
              colorScheme={"primary"}
            >
              <Thead>
                <Tr>
                  <Th fontSize={"md"}>Name</Th>
                  <Th fontSize={"md"}>Email</Th>
                  <Th fontSize={"md"}>Message</Th>
                </Tr>
              </Thead>
              <Tbody>
                {todo.map((items, index) => {
                  return (
                    <Tr key={index}>
                      <Td>
                        <Skeleton isLoaded={loding}>
                          {items.fname.toUpperCase() +
                            " " +
                            items.lname.toUpperCase()}
                        </Skeleton>
                      </Td>

                      <Td>
                        {" "}
                        <Skeleton isLoaded={loding}>{items.email} </Skeleton>
                      </Td>

                      <Td>
                        <Skeleton isLoaded={loding}>{items.message} </Skeleton>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </SkelitonComp>
    </>
  );
};

export default Admin;
