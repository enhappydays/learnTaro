import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import style from  './index.module.scss' 

export default function Profiled() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='profiled'>
      <Text>Hello world!</Text>
    </View>
  )
}
