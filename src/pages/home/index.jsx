import { View} from '@tarojs/components'
// import  Taro   from '@tarojs/taro'
import { useSelector } from 'react-redux'
import HyButton from '../../component/hy-button'
import './index.scss'


export default function Home() {
    const counter=useSelector((state)=>{
      return state.home.counter
    })
  return (
    <View className='home'>
      {counter}
    <HyButton type="primary">666</HyButton>
    </View>
  )
}
