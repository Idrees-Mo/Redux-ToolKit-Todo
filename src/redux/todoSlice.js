import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        title: action.payload.title,
        complete: false,
      };
      state.push(todo);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
