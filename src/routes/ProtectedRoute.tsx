import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

type Props = {
  children: React.ReactElement;
};

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if (!user) {
      toast({
        title: "This service requires login",
        position: "bottom",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      navigate("/", { replace: true });
    }
  });

  return children;
};

export default ProtectedRoute;
