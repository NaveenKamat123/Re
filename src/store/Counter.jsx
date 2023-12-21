import { createSlice} from "@reduxjs/toolkit"
const counterSlice=createSlice({
    name:'counter',
    initialState:{CounterVal:5},
    reducers:{
        increment:(state)=>{
          state.CounterVal++;
        },
        decrement:(state)=>{
            state.CounterVal--;
        },
        addition:(state,action)=>{
            state.CounterVal+=Number(action.payload.num);
        },
        subtraction:(state,action)=>{
            state.CounterVal-=action.payload.num;
        },
    }
});

export const counterActions=counterSlice.actions;

export default counterSlice;