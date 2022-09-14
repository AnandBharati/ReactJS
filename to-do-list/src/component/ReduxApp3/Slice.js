import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
    name: "ToDoApp",
    initialState:{
        todoList: []
    },
    reducers:{
        addItem:(state,action)=>{
            state.todoList.push(action.payload);
        },
        removeItem: (state)=>{
            state.todoList.pop();
        },
        clearItem: (state)=>{
            state.todoList = [];
        }
    }
})


export default mySlice.reducer;
export const {addItem, removeItem, clearItem} = mySlice.actions;