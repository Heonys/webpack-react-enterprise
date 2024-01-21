import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Header />
          <Outlet />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
