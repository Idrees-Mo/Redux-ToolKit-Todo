import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    auth: authSlice,
  },
});
