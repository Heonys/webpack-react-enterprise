import axios from "axios";
import React from "react";

const ServiceWorkerPage = () => {
  const handleClick = async () => {
    const data = await axios.post("/api/user", { id: Date.now(), message: "hello" });
    console.log("ServiceWorkerPage :: ", data);
  };

  return <button onClick={handleClick}>mocking</button>;
};

export default ServiceWorkerPage;
