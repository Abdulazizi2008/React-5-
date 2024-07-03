import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Component A: Count: {count}</p>
      <ComponentB
        increment={() => setCount(count + 1)}
        decrement={() => setCount(count - 1)}
        reset={() => setCount(0)}
      />
    </div>
  );
}

export default ComponentA;
