import { useState } from "react";
import { produce } from "immer";
import { v4 as uuid } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Button, Input, InputGroup, List, ListItem, Stack } from "@chakra-ui/react";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
type FormValue = { title: string };

const todoSchema = z.object({
  title: z.string().trim().min(1, { message: "title is required" }),
});

const UtilPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: zodResolver(todoSchema),
  });
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "123123",
      title: "React",
      done: true,
    },
    {
      id: "12345",
      title: "Immer",
      done: false,
    },
  ]);

  const handleClickTodo = (id: string) => () => {
    setTodos(
      produce((draft) => {
        const target = draft.find((todo) => todo.id === id);
        if (target) target.done = !target.done;
      }),
    );
  };

  const handleSubmitAddTodo: SubmitHandler<FormValue> = (data) => {
    setTodos(
      produce((draft) => {
        draft.push({ id: uuid(), title: data.title, done: false });
      }),
    );
  };

  return (
    <div>
      <Box p="5">
        <form onSubmit={handleSubmit(handleSubmitAddTodo)}>
          <Stack spacing={4} direction="row" align="center">
            <InputGroup size="md" width="auto">
              <Input type="text" placeholder="Enter Todo" {...register("title")} />
            </InputGroup>
            <Button size="md" ml={2} type="submit">
              Add
            </Button>
          </Stack>
        </form>
        {errors.title && <span>This field is required</span>}
        <List>
          {todos.map(({ id, title, done }) => {
            return (
              <ListItem key={id}>
                <Box>
                  {title} {done ? "미완료" : "완료"}
                  <Button size={"xs"} onClick={handleClickTodo(id)}>
                    click
                  </Button>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

export default UtilPage;
