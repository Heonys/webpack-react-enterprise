import { Item, addItems, totalPriceItems } from "@/atom/ItemAtom";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Box, Button, Input, Stack } from "@chakra-ui/react";

const ItemForm = () => {
  const [values, setValues] = useState<Item>({ name: "", category: "", price: "" });
  const setUser = useSetRecoilState(addItems);
  const totalPrice = useRecoilValue(totalPriceItems);

  const handleSubmit = (evnet: React.FormEvent) => {
    evnet.preventDefault();
    setUser([values]);
    setValues({ name: "", category: "", price: "" });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box maxW="md" p={2}>
      <Box>셀렉터 테스트</Box>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Input
            type="text"
            name="category"
            value={values.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <Input
            type="text"
            name="price"
            value={values.price}
            onChange={handleChange}
            placeholder="Prise"
          />
          <Button type="submit" colorScheme="blue">
            입력
          </Button>
        </Stack>
        <Box p={2}>합계 {totalPrice}</Box>
      </form>
    </Box>
  );
};

export default ItemForm;
