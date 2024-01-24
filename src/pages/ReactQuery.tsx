import useUserQuery from "@/hook/useUserQuery";
import { Box, Button, List, ListItem, Stack } from "@chakra-ui/react";

const ReactQuery = () => {
  const {
    getUserQuery: { data, isLoading },
    postUserMutation: { mutate },
  } = useUserQuery({ staleTime: 1000 * 10 });

  const handleClick = () => {
    mutate({ id: Date.now(), message: "item" });
  };

  return (
    <Box p="5">
      <Stack spacing={4} direction="column" align="center">
        <Box>Optimistic Update</Box>
        <Button colorScheme="blue" size="sm" onClick={handleClick}>
          Add item (Delay 0.5)
        </Button>
        {!isLoading && (
          <List>
            {data?.map((user) => {
              return <ListItem key={user.id}>{user.message}</ListItem>;
            })}
          </List>
        )}
      </Stack>
    </Box>
  );
};

export default ReactQuery;
