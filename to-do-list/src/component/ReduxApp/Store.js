import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slice';

export default configureStore({
    reducer: {
        counter: CounterReducer,
    }
});
