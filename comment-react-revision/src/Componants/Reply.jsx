import React, { useEffect, useState } from "react";

function Reply(props) {
  let numberOfNested = 0;
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyFormValue, setReplyFormValue] = useState("");
  const increaseCount = () => {
    numberOfNested = numberOfNested + 10;
  };
  const handleReplyForm = () => {
    setShowReplyForm(true);
  };
  const handleReplyChange = (e) => {
    e.preventDefault();
    setReplyFormValue(e.target.value);
  };
  const handleAddReply = () => {
    let payload = {
      name: "bot",
      comment: replyFormValue,
    };
    console.log(payload);
    fetch(`http://localhost:4000/comment/${props.passid}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: "15px",
        borderRadius: "10px",
        width: "70%",
      }}
    >
      <div>
        <div style={{ display: "flex" }}>
          <h4>{props.item}</h4>
          <h5 style={{ marginLeft: "10px" }}>Commented at {props.getDate}</h5>
        </div>
        <h4 style={{ marginTop: "-15px" }}>Comment : {props.comment}</h4>
      </div>

      <div style={{ marginTop: "-15px" }}>
        {!showReplyForm ? (
          <div>
            <h5 onClick={handleReplyForm}>reply</h5>
          </div>
        ) : (
          <div>
            <input onChange={handleReplyChange} />
            <button
              onClick={handleAddReply}
              disabled={replyFormValue.length < 1}
            >
              Add
            </button>
            <button onClick={() => setShowReplyForm(false)}>Cancel</button>
          </div>
        )}
      </div>
      {increaseCount()}
      <div style={{ marginLeft: numberOfNested }}>nestedComment</div>
    </div>
  );
}

export default Reply;
