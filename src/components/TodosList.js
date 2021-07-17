import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      TodosList
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
