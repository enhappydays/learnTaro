import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeMutidata } from "@/service/home";
import { getgoods } from "../../service/home";
// 异步
export const HomeMutidata = createAsyncThunk(
  "home/multidata", //action type的前缀
  async (payload) => {
    console.log(payload);
    const res = await getHomeMutidata();
    return res.data;
  }
);
export const getgoodsAction = createAsyncThunk(
  "home/goods", //action type的前缀
  async (payload) => {
    console.log(payload);
    const { type, page } = payload;
    const res = await getgoods(type, page);
    return {
      page,
      type,
      goods: res.data.goods,
    };
  }
);
const homeSlice = createSlice({
  name: "home", //唯一模块
  initialState: {
    counter: 0,
    currentType: 0,
    goodsList: {
      page: 1,
      list: [],
    },
  },
  reducers: {
    increment(state, action) {
      console.log(state, action);
      state.counter += action.payload;
    },
    decrement() {},
    getCurrentIndex(state, action) {
      state.currentType = action.payload;
    },
    getCurrentPage(state, action) {
      state.goodsList.page = action.payload;
    },
  },
  //   异步存储
  extraReducers: (builder) => {
    builder
      .addCase(HomeMutidata.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(getgoodsAction.fulfilled, (state, { payload }) => {
        if (payload.type != state.currentType) {
          state.goodsList.list = [...payload.goods];
        } else {
          if (payload.page == 1) {
            state.goodsList.list = payload.goods;
          } else {
            if (payload.goods && payload.goods.length) {
              state.goodsList.list = [
                ...state.goodsList.list,
                ...payload.goods,
              ];
            }
          }
        }
      });
  },
});
// 同步action
export const { increment, decrement, getCurrentIndex, getCurrentPage } =
  homeSlice.actions;

export default homeSlice.reducer;
