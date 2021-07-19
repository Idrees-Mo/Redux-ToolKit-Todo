import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice";

import { Card, CardHeader, IconButton } from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoItem = ({ todo: { id, title, complete } }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <IconButton onClick={() => dispatch(removeTodo({ id }))}>
            <DeleteOutlined />
          </IconButton>
        }
      />
    </Card>
  );
};

export default TodoItem;
