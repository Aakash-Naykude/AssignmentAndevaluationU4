import React, { useContext } from "react";
import { DemoContext } from "../Context/ContextDemo";

function Signup() {
  const { token, handleToken } = useContext(DemoContext);
  return (
    <div>
      <h1>
        <h1>
          <h1>Sign Up</h1>
        </h1>
      </h1>
      <button onClick={handleToken}>{token ? "Sign in" : "Sign Out"}</button>
    </div>
  );
}

export default Signup;
