import { http, HttpResponse } from "msw";

export type UserType = {
  id: number;
  message: string;
};

const users: UserType[] = [
  { id: 1, message: "izereal" },
  { id: 2, message: "yasuo" },
];

export const handlers = [
  http.get("/api/user", async () => {
    return HttpResponse.json(users);
  }),
  http.get("/api/user/:id", async ({ params }) => {
    const id = params.id as string;
    const findUser = users.filter((user) => user.id === parseInt(id));
    return HttpResponse.json(findUser);
  }),
  http.post("/api/user", async ({ request }) => {
    const data = await request.json();
    (data as UserType).message += "[new]";
    users.push(data as UserType);
    return HttpResponse.json(users, { status: 200 });
  }),
];
