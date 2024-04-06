import { View } from "@tarojs/components";
import { memo, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "proptypes";
import classNames from "classnames";

// import classNames from "classnames";
import style from "./index.modules.scss";


const ScrollView = (props) => {

const {title,onBtnClick,goodsList}=props
  const [active,setActive]=useState(0)
  const handleClickActive=(index)=>{
    setActive(index)
    onBtnClick&&onBtnClick(index)
  }
  return (
    <View>
        <View  className={classNames(style['contain'])}>
        {title.map((item,index)=>{
        return <View onClick={()=>{handleClickActive(index)}} key={index} className={classNames(style['scroll'],active==index?style['active']:'')}>{item}</View>
     })}
        </View>
    
      {goodsList.map((item,index)=>{
        return <View key={index}>{item.title
        }</View>
     })}
    </View>
  );
};
export default memo(ScrollView);
ScrollView.propTypes = {
    title: PropTypes.array,
  onBtnClick:PropTypes.func,
  goodsList:PropTypes.array,
};
