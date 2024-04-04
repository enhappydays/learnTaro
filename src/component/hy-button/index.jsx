import { View } from "@tarojs/components";
import { memo } from "react";
import PropTypes from "proptypes";
import classNames from "classnames";
import style from "./index.modules.scss";

const HyButton = (props) => {
  const { type = "default",children="button",onBtnClick } = props;
  const handBtnClick=()=>{
    onBtnClick&&onBtnClick()
  }
  return (
    <View onClick={handBtnClick} className={classNames(style["hy-button"], style[type])}>
      {children}
    </View>
  );
};
export default memo(HyButton);
HyButton.propTypes = {
  type: PropTypes.string,
  onBtnClick:PropTypes.func,
};
