import React from "react";
import ItemForm from "@/components/ItemForm";
import ItemView from "@/components/ItemView";
import { selectedUserQuery, selectedUserId } from "@/atom/ItemAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const RecoilPage = () => {
  const users = useRecoilValue(selectedUserQuery);
  const setUserId = useSetRecoilState(selectedUserId);
  return (
    <section>
      <div>TestPage</div>
      <button onClick={() => setUserId(1)}>update1</button>
      <button onClick={() => setUserId(2)}>update2</button>
      {users.map((user) => {
        return <div key={user.id}>{user.message}</div>;
      })}
      <ItemForm />
      <ItemView />
    </section>
  );
};

export default RecoilPage;
