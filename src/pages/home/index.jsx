import { View } from "@tarojs/components";
// import  Taro   from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";

import { increment,HomeMutidata } from "@/store/modules/home";
// import { getHomeMutidata } from "@/service/home";
import HyButton from "../../component/hy-button";
import ScrollView from "./component/scroll-view";
import { getgoodsAction } from "../../store/modules/home";
import { useLoad } from "@tarojs/taro";
// import style from  './index.module.scss'


// import {  } from "@/store/modules/home";

export default function Home() {
  const counter = useSelector((state) => {
    return state.home.counter;
  });
  const goodsList=useSelector((state)=>{
    return state.home.goodsList
  })
  console.log(goodsList,'selectorselector');
  const dispatch = useDispatch();
  const addNumber = () => {
    dispatch(increment(1));
  };
  const getHome = async() => {
    console.log('dd');
 
    // await getHomeMutidata();
    dispatch(HomeMutidata('100'));
  };
  const handleItem=(index)=>{
    console.log(index);
    dispatch(getgoodsAction({type:index,page:1}))
  }
  useLoad(()=>{
    dispatch(getgoodsAction({type:0,page:1}))
    dispatch(getgoodsAction({type:1,page:1}))
  })
  return (
    <View className="home">
      {counter}
      <HyButton type="primary" onBtnClick={addNumber}>
        addNumber+1
      </HyButton>
      <HyButton type="primary" onBtnClick={()=>getHome()}>
        异步
      </HyButton>
      <ScrollView title={['精彩推荐','精品案例']} onBtnClick={handleItem} goodsList={goodsList}></ScrollView>
    </View>
  );
}
