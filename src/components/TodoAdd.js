import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TodoAdd = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onsubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(
        addTodo({
          title: todo,
        })
      );
    }
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
