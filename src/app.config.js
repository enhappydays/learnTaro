export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/profile/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    color:'#999',
    selectedColor:'#ff464e',
    list:[
      {
        text:'首页',
        pagePath:'pages/home/index'
      },
      {
        text:'分类',
        pagePath:'pages/category/index'
      },
      {
        text:'购物车',
        pagePath:'pages/cart/index'
      },
      {
        text:'我的',
        pagePath:'pages/profile/index'
      },
    ]
}
})
