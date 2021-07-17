import React, { useState } from "react";

const TodoAdd = () => {
  const [todo, setTodo] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <label>New Todo</label>
        <input
          type="text"
          name="title"
          value={todo}
          placeholder="Add new Todo..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoAdd;
