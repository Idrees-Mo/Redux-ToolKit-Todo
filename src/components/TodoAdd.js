import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { TextField, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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
        <TextField
          label="New Todo"
          color="primary"
          name="title"
          value={todo}
          fullWidth
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          endIcon={<AddCircleOutlineIcon fontSize="large" />}
          type="submit"
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default TodoAdd;
