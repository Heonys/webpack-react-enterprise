import axios from "axios";

const ServiceWorkerPage = () => {
  const handleClick = async () => {
    const data = await axios.post("/api/user", { id: Date.now(), message: "hello" });
    console.log("Mocking :: ", data);
  };

  return <button onClick={handleClick}>mocking</button>;
};

export default ServiceWorkerPage;
