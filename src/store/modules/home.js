import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeMutidata } from "@/service/home";
import { getgoods } from "../../service/home";
// 异步
export const HomeMutidata = createAsyncThunk(
  "home/multidata",//action type的前缀
  async (payload) => {
    console.log(payload);
    const res = await getHomeMutidata();
    return res.data;
  }
);
export const getgoodsAction = createAsyncThunk(
  "home/goods",//action type的前缀
  async (payload) => {
    console.log(payload);
    const {type,page}=payload
    const res = await getgoods(type,page);
    return res.data;
  }
);
const homeSlice = createSlice({
  name: "home", //唯一模块
  initialState: {
    counter: 0,
    goodsList:[]
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
    }).addCase(getgoodsAction.fulfilled,(state,{payload})=>{
      console.log('getgoodsAction',payload);
      state.goodsList=payload.goods
    })
  }
});
// 同步action
export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;
