import { ChangeEvent, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const handleClick = () => {
    console.log("clicked");
    setCount(count + 1);
  };

  const handleFocus = () => {
    console.log("focused");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="container">
      <label htmlFor="userInput">인풋</label>
      <input type="text" id="userInput" onFocus={handleFocus} />
      <div data-testid="count">{count}</div>
      <button onClick={handleClick}>카운트 증가</button>
      <div data-testid="text">{value}</div>
      <label htmlFor="keydown">키다운</label>
      <input id="keydown" type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Counter;
