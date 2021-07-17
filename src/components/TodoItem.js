import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo } from "../redux/todoSlice";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  display: flex;
  align-items: center; ;
`;
const TodoItem = ({ todo: { id, title, complete } }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <p>{title}</p>
      <span onClick={() => dispatch(removeTodo({ id }))}>x</span>
    </Container>
  );
};

export default TodoItem;
