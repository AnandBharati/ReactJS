import { configureStore } from "@reduxjs/toolkit";
import reducer from './TODO_SLICE'

export default configureStore({
    reducer: {
        TODOAPP :  reducer
    }
})