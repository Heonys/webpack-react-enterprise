import ItemForm from "@/components/ItemForm";
import ItemView from "@/components/ItemView";
import { selectedUserId, selectedUserQuery } from "@/atom/ItemAtom";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { UserType } from "@/mocks/handlers";
import { Box, Button, Stack } from "@chakra-ui/react";

const RecoilPage = () => {
  const users = useRecoilValueLoadable(selectedUserQuery);
  const setUserId = useSetRecoilState(selectedUserId);

  if (users.state !== "hasValue") {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <Box maxW="md" p={2}>
        <Box>비동기 셀렉터 테스트</Box>
        <Stack direction="row" spacing={2} align="center">
          <Button colorScheme="purple" size="xs" onClick={() => setUserId(1)}>
            ID 1
          </Button>
          <Button colorScheme="purple" size="xs" onClick={() => setUserId(2)}>
            ID 2
          </Button>
        </Stack>
        {users.contents.map((user: UserType) => {
          return <div key={user.id}>{user.message}</div>;
        })}
      </Box>
      <ItemForm />
      <ItemView />
    </section>
  );
};

export default RecoilPage;
