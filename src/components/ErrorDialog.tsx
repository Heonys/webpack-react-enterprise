import Dialog from "./Dialog";
import { useDialog } from "@/hooks/useDialog";
import { Box, Button } from "@chakra-ui/react";

const ErrorDialog = () => {
  const { closeDialog } = useDialog();
  return (
    <Dialog
      header={
        <Box color="white" fontWeight="bold" p={4} roundedTop="md">
          오류
        </Box>
      }
      footer={
        <Button onClick={closeDialog} colorScheme="blue" mt={4} rounded="md">
          확인
        </Button>
      }
    >
      <Box p={4}>잠시 후 다시 시도해 주세요</Box>
    </Dialog>
  );
};

export default ErrorDialog;
