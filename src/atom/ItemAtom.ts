import { atom, selector } from "recoil";

export interface Item {
  name: string;
  category: string;
  price: string;
}

export const itemAtom = atom<Item[]>({
  key: "itemAtom",
  default: [],
});

export const addItems = selector({
  key: "addItemAtom",
  get: ({ get }) => get(itemAtom),
  set: ({ get, set }, newItem) => {
    const itemList = get(itemAtom);
    set(itemAtom, [...itemList, ...(newItem as Item[])]);
  },
});

export const totalPriceItems = selector({
  key: "totalPriceItem",
  get: ({ get }) => {
    const items = get(itemAtom);
    return items.reduce((acc, cur) => acc + Number(cur.price), 0);
  },
});
