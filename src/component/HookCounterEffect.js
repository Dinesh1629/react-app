import React, { useState, useEffect } from "react";

function HookCOunterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect -updating document title");
    document.title = "You Clicked ${count} times";
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>click{count}times</button>
    </div>
  );
}

export default HookCOunterEffect;
