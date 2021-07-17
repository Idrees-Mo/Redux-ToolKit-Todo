import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";

const TodoItem = ({ todo: { id, title, complete } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{title}</p>
      <span onClick={() => dispatch(removeTodo({ id }))}>x</span>
    </div>
  );
};

export default TodoItem;
