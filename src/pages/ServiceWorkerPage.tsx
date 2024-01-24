import { Box, Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const ServiceWorkerPage = () => {
  const toast = useToast();

  const handleClick = async () => {
    const data = await axios.post("/api/user", { id: Date.now(), message: "hello" });

    if (data.status === 200) {
      toast({
        title: "[MSW] POST /api/user (200 OK)",
        position: "bottom",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={2}>
      <Button colorScheme="pink" onClick={handleClick}>
        mocking
      </Button>
    </Box>
  );
};

export default ServiceWorkerPage;
