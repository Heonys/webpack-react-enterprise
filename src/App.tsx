import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default App;
