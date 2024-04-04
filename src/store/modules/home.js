import { createSlice} from '@reduxjs/toolkit'

const homeSlice=createSlice({
    name:'home', //唯一模块
    initialState:{
        counter:0
    },
    reducers:{
        increment(state,action){
            console.log(state,action);
        },
        decrement(){}
    }
});
// 同步action
export const {increment,decrement}=homeSlice.actions
export default homeSlice.reducer