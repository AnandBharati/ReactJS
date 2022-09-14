import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name: "TODOAPP",
    initialState: {
        list: []
    },
    reducers:{
        addTodo:(state, action)=>{
            state.list.push(action.payload); 
            //state.list = "addTodo"
        },
        removeTodo: (state)=>{
            state.list.pop(); 
            //state.list = 'Remove Todo'
        },
        clearTodo:(state)=>{
            state.list = [];
            //state.list = "clear"
        }
    }
})

export default ToDoSlice.reducer;
export const {addTodo, removeTodo, clearTodo} = ToDoSlice.actions;