import axios from "axios";
import { UserType } from "@/mocks/handlers";
import { fakeDelay } from "@/util/common";

export const getUser = async () => {
  const user = await axios<UserType[]>("/api/user");
  return user.data;
};

export const postUser = async ({ id, message }: UserType) => {
  return await fakeDelay(axios.post<UserType[]>("/api/user", { id, message }));
};
