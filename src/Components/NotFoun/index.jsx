import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Flex w={"100%"} h="100vh" justifyContent={"center"} alignItems="center">
        <Box>
          <Text fontWeight={"black"} fontSize="6xl">
            404 NOT FOUND
          </Text>
          <Text>
            You are trying to access the routes on your own. Go in the flow of
            ui.
          </Text>
          <Center my={"2rem"}>
            <Button
              colorScheme={"primary"}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </Center>
        </Box>
      </Flex>
    </>
  );
}
