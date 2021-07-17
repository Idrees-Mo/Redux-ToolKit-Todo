import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "todo-1",
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
  ],
  reducers: {},
});

export default todoSlice.reducer;
