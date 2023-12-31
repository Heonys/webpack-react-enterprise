import axios from "axios";
import React from "react";

const ServiceWorkerPage = () => {
  const handleClick = async () => {
    const data = await axios("/user");
    console.log(data);
  };

  return <button onClick={handleClick}>mocking</button>;
};

export default ServiceWorkerPage;
