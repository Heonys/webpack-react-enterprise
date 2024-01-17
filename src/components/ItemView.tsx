import { itemAtom } from "@/atom/ItemAtom";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";

const listStyle = css`
  max-width: 12rem;
  margin: 0.5rem;
  border: salmon dashed 0.3rem;
`;

const ItemView = () => {
  const users = useRecoilValue(itemAtom);
  return (
    <div>
      {users.map(({ name, category, price }) => {
        return (
          <ul key={name} css={listStyle}>
            <li>{name}</li>
            <li>{category}</li>
            <li>{price}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ItemView;
