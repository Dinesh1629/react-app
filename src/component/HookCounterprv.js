import React, { useState } from "react";

function HookCounterprv() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount(PrevCount => count + 5);
    }
  }



  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>initial count</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        increment
      </button>
       <button onClick={() => setCount(prevCount => prevCount - 1)}>
        decrement
      </button>
      <button onClick= {increment}>increment 5</button>
    </div>
  );
}
export default HookCounterprv;
