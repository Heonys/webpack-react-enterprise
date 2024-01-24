import { DialogContainer } from "@/hook/useDialog";
import { Box, Stack } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";

type Props = {
  header: ReactElement;
  footer: ReactElement;
  children: ReactNode;
};

const DialogPageForm = ({ header, footer, children }: Props) => {
  return (
    <Box mt={3}>
      <Stack spacing={4} direction="column" align="center">
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
        <DialogContainer />
      </Stack>
    </Box>
  );
};

export default DialogPageForm;
