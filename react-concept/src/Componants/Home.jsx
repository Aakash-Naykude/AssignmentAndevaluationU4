import React, { useContext, useEffect, useState } from "react";
import { DemoContext } from "../Context/ContextDemo";

function Home() {
  const { token, handleToken } = useContext(DemoContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
      console.log("Use OF use Effect")
  },[count]);
  return (
    <div>
      <h1>
        <h1>Home</h1>
      </h1>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setCount(count - 1)}>Reduce Count</button>
      <br />
      <button onClick={handleToken}>{token ? "Sign in" : "Sign Out"}</button>
    </div>
  );
}

export default Home;
