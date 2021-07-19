import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

import { Grid } from "@material-ui/core";
const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <Grid container spacing={1}>
      {todos.map((todo) => (
        <Grid item xs={12}>
          <TodoItem key={todo.id} todo={todo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodosList;
