import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [
      { id: 1, name: "Sardor" },
      { id: 2, name: "Alibek" },
      { id: 3, name: "Fozilkhon" },
    ],
  },
  reducers: {
    save: (state, action) => {
      const NewTodo = {
        id: state.todo.length + 1,
        name: action.payload.name,
      };
      state.todo.push(NewTodo);
    },
    deletes: (state, action) => {
      state.todo = state.todo.filter((todos) => todos.id !== action.payload.id);
    },
  },
});

export const { save, deletes } = CounterSlice.actions;
export default CounterSlice.reducer;
