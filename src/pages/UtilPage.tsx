import { useState } from "react";
import { produce } from "immer";
import { v4 as uuid } from "uuid";
import classNames from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const borderClass = classNames({
    "p-2 border rounded-lg": true,
    "focus:outline-none": true,
    "focus:ring-2": true,
  });

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
      <ul>
        <form onSubmit={handleSubmit(handleSubmitAddTodo)}>
          <input type="text" className={borderClass} {...register("title")} />
          <button>add Todo</button>
        </form>
        {errors.title && <span>This field is required</span>}

        {todos.map(({ id, title, done }) => {
          return (
            <li key={id}>
              <span>
                {title} {done ? "미완료" : "완료"}
              </span>
              <button onClick={handleClickTodo(id)}>click</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UtilPage;
