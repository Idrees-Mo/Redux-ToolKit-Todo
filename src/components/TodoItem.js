import React from "react";

const TodoItem = ({ todo: { id, title, complete } }) => {
  return (
    <div>
      <p>
        {id}- {title}
      </p>
      <span>x</span>
    </div>
  );
};

export default TodoItem;
