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
  ],
  hotNavList: [
    {
      url: require('@/pages/Home/imgs/nav/nav_icon01.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon02.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon03.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon04.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon05.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon06.gif'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon07.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon08.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon09.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon10.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon11.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon12.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon13.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon14.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon15.png'),
      title: '限时秒杀'
    },
    {
      url: require('@/pages/Home/imgs/nav/nav_icon16.png'),
      title: '限时秒杀'
    }
  ]
}