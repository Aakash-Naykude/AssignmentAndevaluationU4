import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import Reply from "./Reply";

function AddComment() {
  const [list, setList] = useState([]);
  const getComment = () => {
    fetch("http://localhost:4000/comment")
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setList(res);
      });
  };
  useEffect(() => {
    getComment();
  }, []);
  return (
    <div>
      <Comments getComment={getComment} />
      <div>
        {list.map((e) => {
          return (
            <Reply
              item={e.name}
              passid={e._id}
              getDate={e.createdAt}
              comment={e.comment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AddComment;
