import { getUserById } from "@/api/user";
import { atom, selector, selectorFamily } from "recoil";

export interface Item {
  name: string;
  category: string;
  price: string;
}

export const itemAtom = atom<Item[]>({
  key: "ItemAtom",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newItem) => {
        console.debug("Updated Item:", newItem);
      });
    },
  ],
});

export const addItems = selector({
  key: "AddItemAtom",
  get: ({ get }) => get(itemAtom),
  set: ({ get, set }, newItem) => {
    const itemList = get(itemAtom);
    set(itemAtom, [...itemList, ...(newItem as Item[])]);
  },
});

export const totalPriceItems = selector({
  key: "TotalPriceItem",
  get: ({ get }) => {
    const items = get(itemAtom);
    return items.reduce((acc, cur) => acc + Number(cur.price), 0);
  },
});

export const selectedUserId = atom({
  key: "SelectedUserId",
  default: 1,
});

export const selectedUserQuery = selector({
  key: "selectedUserQuery",
  get: async ({ get }) => {
    const response = await getUserById(get(selectedUserId));
    return response;
  },
});

export const userByIdQuery = selectorFamily({
  key: "UserByIdQuery",
  get: (id: number) => async () => {
    const response = await getUserById(id);
    return response;
  },
});
