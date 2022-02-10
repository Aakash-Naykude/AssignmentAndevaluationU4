import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid gray",
      }}
    >
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/signin">
        <h1>Sign In</h1>
      </Link>
      <Link to="/signup">
        <h1>Sugn Up</h1>
      </Link>
      
      <Link to="/content">
        <h1>Content</h1>
      </Link>
    </div>
  );
}

export default Navbar;
