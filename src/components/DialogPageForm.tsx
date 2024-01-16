import { DialogContainer } from "@/hook/useDialog";
import styled from "@emotion/styled";
import React, { ReactElement, ReactNode } from "react";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
`;

type Props = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

const DialogPageForm = ({ header, footer, children }: Props) => {
  return (
    <StyledPage>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
      <DialogContainer />
    </StyledPage>
  );
};

export default DialogPageForm;
