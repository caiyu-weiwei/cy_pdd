module.exports = {
  tabBarArr: [
    {
      path: '/home',
      normal: require('static/img/icon_home.png'),
      selected: require('static/img/icon_home_selected.png'),
      title: '首页'
    },
    {
      path: '/recommend',
      normal: require('static/img/icon_intro.png'),
      selected: require('static/img/icon_intro_selected.png'),
      title: '推荐'
    },
    {
      path: '/search',
      normal: require('static/img/icon_search.png'),
      selected: require('static/img/icon_search_selected.png'),
      title: '搜索'
    },
    {
      path: '/chat',
      normal: require('static/img/icon_chat.png'),
      selected: require('static/img/icon_chat_selected.png'),
      title: '聊天'
    },
    {
      path: '/me',
      normal: require('static/img/icon_mine.png'),
      selected: require('static/img/icon_mine_selected.png'),
      title: '我的'
    },
  ],
  lyTabItems: [
    {label: '热门'},
    {label: '服饰'},
    {label: '鞋包'},
    {label: '母婴'},
    {label: '百货'},
    {label: '食品'},
    {label: '内衣'},
    {label: '男装'},
    {label: '电器'}
  ],
  lyTabOptions: {
    activeColor: '#e9232c'
  },
  subRouterList: [
    '/home/hot',
    '/home/dress',
    '/home/box',
    '/home/mbaby',
    '/home/general',
    '/home/food',
    '/home/shirt',
    '/home/man',
    '/home/ele',
  ]
}