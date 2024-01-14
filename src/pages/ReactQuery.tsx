import React from "react";
import useUserQuery from "@/hook/useUserQuery";

const ReactQuery = () => {
  const {
    getUserQuery: { data, isLoading },
    postUserMutation: { mutate },
  } = useUserQuery({ staleTime: 1000 * 10 });

  const handleClick = () => {
    mutate({ id: Date.now(), message: "mutation" });
  };

  return (
    <section>
      <button onClick={handleClick}>optimistic update</button>
      {!isLoading && (
        <ul>
          {data?.map((user) => {
            return <li key={user.id}>{user.message}</li>;
          })}
        </ul>
      )}
    </section>
  );
};

export default ReactQuery;
