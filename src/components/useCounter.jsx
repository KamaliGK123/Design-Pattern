import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return {
    count,
    handleAdd,
    handleSub,
    handleReset
  };
};

export default useCounter;
