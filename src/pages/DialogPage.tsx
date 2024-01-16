import React from "react";
import DialogPageForm from "@/components/DialogPageForm";
import { useDialog } from "@/hook/useDialog";
import ErrorDialog from "@/components/ErrorDialog";

const DialogPage = () => {
  const { setDialog } = useDialog();

  const handleClick = () => {
    setDialog(<ErrorDialog />);
  };

  return (
    <DialogPageForm header={<h1>header</h1>} footer={<h5>footer</h5>}>
      <button onClick={handleClick}>에러버튼</button>
    </DialogPageForm>
  );
};

export default DialogPage;
