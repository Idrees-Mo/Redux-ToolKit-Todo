import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  min-height: 60vh;
  width: 50%;
`;
const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodosList;
