import DialogPageForm from "@/components/DialogPageForm";
import { useDialog } from "@/hooks/useDialog";
import ErrorDialog from "@/components/ErrorDialog";
import { Button } from "@chakra-ui/react";

const DialogPage = () => {
  const { setDialog } = useDialog();

  const handleClick = () => {
    setDialog(<ErrorDialog />);
  };

  return (
    <DialogPageForm header={<h1>header</h1>} footer={<h5>footer</h5>}>
      <Button colorScheme="red" variant="outline" size="sm" onClick={handleClick}>
        Error Dialog
      </Button>
    </DialogPageForm>
  );
};

export default DialogPage;
