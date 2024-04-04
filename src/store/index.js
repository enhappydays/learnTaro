import {configureStore} from '@reduxjs/toolkit'
import homeReducer from './modules/home'

const store=configureStore({

   reducer:{
    // 子模块
     home:homeReducer,
   },
//    middleware
});
export default store