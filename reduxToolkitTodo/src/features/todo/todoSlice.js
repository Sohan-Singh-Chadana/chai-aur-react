import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "1", text: "Hello Sohan" }], // Changed id to string
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload, // Assuming payload is the text string
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload; // Destructure id and text from payload
            const existingTodo = state.todos.find((todo) => todo.id === id);

            if (existingTodo) {
                existingTodo.text = text; // Update the text directly
            }
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;