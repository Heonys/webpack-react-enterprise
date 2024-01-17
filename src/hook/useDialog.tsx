import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { ReactElement, Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type DialogContextType = {
  dialog: ReactElement | null;
  setDialog: Dispatch<SetStateAction<ReactElement | null>>;
};

export const DialogContext = createContext<DialogContextType>({
  dialog: null,
  setDialog: () => {},
});
DialogContext.displayName = "DialogContext";

type Props = {
  children: React.ReactNode;
};
export const DialogProvider = ({ children }: Props) => {
  const [dialog, setDialog] = useState<ReactElement | null>(null);
  return <DialogContext.Provider value={{ dialog, setDialog }}>{children}</DialogContext.Provider>;
};

export const useDialog = () => {
  const { dialog, setDialog } = useContext(DialogContext);
  const closeDialog = () => setDialog(null);
  return { dialog, setDialog, closeDialog };
};

export const DialogContainer = () => {
  const { dialog } = useDialog();
  return dialog && createPortal(<BackDrop>{dialog}</BackDrop>, document.querySelector("#dialog")!);
};

const BackDrop = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;
