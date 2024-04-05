import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeMutidata } from "@/service/home";
// 异步
export const HomeMutidata = createAsyncThunk(
  "home/multidata",//action type的前缀
  async (payload) => {
    console.log(payload);
    const res = await getHomeMutidata();
    return res.data;
  }
);
const homeSlice = createSlice({
  name: "home", //唯一模块
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {
      console.log(state, action);
      state.counter += action.payload;
    },
    decrement() {},
  },
//   异步存储
  extraReducers:(builder)=>{
    builder.addCase(HomeMutidata.fulfilled,(state,action)=>{
        console.log(action);
    })
  }
});
// 同步action
export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;
