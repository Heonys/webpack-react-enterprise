import { http, HttpResponse } from "msw";

export type UserType = {
  id: number;
  message: string;
};

const users: UserType[] = [];

export const handlers = [
  http.get("/api/user", async () => {
    return HttpResponse.json(users);
  }),
  http.post("/api/user", async ({ request }) => {
    const data = await request.json();
    (data as UserType).message += "[new]";
    users.push(data as UserType);
    return HttpResponse.json(users, { status: 200 });
  }),
  http.get("/api/test", async () => {
    console.log("Fetching data from the server...");
    return HttpResponse.json("test");
  }),
];
