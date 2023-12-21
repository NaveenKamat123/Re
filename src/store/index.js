import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./Counter";
import privacySlice from "./Privacy";

const CounterStore=configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer

}});

export default CounterStore;







