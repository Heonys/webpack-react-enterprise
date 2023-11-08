import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>{"asd" + "123"}</div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
