import React from "react";
import TodoItem from "./TodoItem";

const TodosList = () => {
  const todos = [
    {
      id: 1,
      title: "todo1",
      complete: false,
    },
    {
      id: 2,
      title: "todo2",
      complete: false,
    },
    {
      id: 3,
      title: "todo3",
      complete: true,
    },
  ];

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
