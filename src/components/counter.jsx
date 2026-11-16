import useCounter from "./useCounter";

const Counter = () => {
  const { count, handleAdd, handleSub, handleReset } = useCounter();

  return (
    <div>
      <h2>Counter Application</h2>

      <input type="number" value={count} readOnly />

      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSub}>Decrement</button>
    </div>
  );
};

export default Counter;
