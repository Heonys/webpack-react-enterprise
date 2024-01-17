import { Item, addItems, totalPriceItems } from "@/atom/ItemAtom";
import { css } from "@emotion/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const formStlye = css`
  max-width: 12rem;
  & input {
    display: block;
    width: 100%;
    border: black dashed 1px;
    margin: 0.5rem;
  }
  & button {
    width: 100%;
    margin: 0.5rem;
    background-color: dodgerblue;
  }
`;

const ItemForm = () => {
  const [values, setValues] = useState<Item>({ name: "", category: "", price: "" });
  const setUser = useSetRecoilState(addItems);
  const totalPrice = useRecoilValue(totalPriceItems);

  const handleSubmit = (evnet: React.FormEvent) => {
    evnet.preventDefault();
    setUser([values]);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} css={formStlye}>
      <input type="text" name="name" value={values.name} onChange={handleChange} />
      <input type="text" name="category" value={values.category} onChange={handleChange} />
      <input type="text" name="price" value={values.price} onChange={handleChange} />
      <button>입력</button>
      <div>합계 {totalPrice}</div>
    </form>
  );
};

export default ItemForm;
