import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import DefaultHelmet from "@/util/DefaultHelmet";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <DefaultHelmet />
          <Header />
          <Outlet />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
