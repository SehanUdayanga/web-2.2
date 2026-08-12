import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [inp, setInp] = useState("");

  const [message, setMessage] = useState("");

  function increaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (inp.length > 10) {
      setMessage("You are exceeding the limit!");
    } else {
      setMessage("");
    }
  }, [inp]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={increaseCount}>
        Click Me
      </button>

      <br />
      <br />

      <input
        id="inp"
        value={inp}
        onChange={(event) => setInp(event.target.value)}
      />

      <p></p>

      

      <p>{message}</p>
    </div>
  );
}

export default Counter;