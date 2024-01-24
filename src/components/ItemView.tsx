import { itemAtom } from "@/atom/ItemAtom";
import { Box, ListItem, List } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

const ItemView = () => {
  const users = useRecoilValue(itemAtom);
  return (
    <Box maxW="md" mx="auto" p={4}>
      {users.map(({ name, category, price }) => {
        return (
          <List spacing={2} key={name} margin="1rem" border="salmon dashed 0.3rem;">
            <ListItem>{name}</ListItem>
            <ListItem>{category}</ListItem>
            <ListItem>{price}</ListItem>
          </List>
        );
      })}
    </Box>
  );
};

export default ItemView;
