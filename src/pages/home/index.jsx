import { View } from "@tarojs/components";
// import  Taro   from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";
import { increment,HomeMutidata } from "@/store/modules/home";
import HyButton from "../../component/hy-button";
import "./index.scss";
// import { getHomeMutidata } from "../../service/home";

// import {  } from "@/store/modules/home";

export default function Home() {
  const counter = useSelector((state) => {
    return state.home.counter;
  });
  const dispatch = useDispatch();
  const addNumber = () => {
    dispatch(increment(1));
  };
  const getHome = async() => {
    console.log('dd');
 
    // await getHomeMutidata();
    dispatch(HomeMutidata('100'));
  };
  return (
    <View className="home">
      {counter}
      <HyButton type="primary" onBtnClick={addNumber}>
        addNumber+1
      </HyButton>
      <HyButton type="primary" onBtnClick={()=>getHome()}>
        异步
      </HyButton>
    </View>
  );
}
