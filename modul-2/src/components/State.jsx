import { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleIncrementByFiveClick = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleIncrementByFiveClick}>Increment by 5</button>
    </div>
  );
};

export default State;
