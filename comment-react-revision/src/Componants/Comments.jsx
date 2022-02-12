import React, { useState } from "react";
import "./Comment.css";
function Comments({ getComment }) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = () => {
    let paylaod = {
      name: "Aakash",
      comment: name,
    };
    fetch("http://localhost:4000/comment", {
      method: "POST",
      body: JSON.stringify(paylaod),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        getComment();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="comment">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter Comment Here"
      />
      <button onClick={handleSubmit}>Add comment</button>
    </div>
  );
}

export default Comments;
