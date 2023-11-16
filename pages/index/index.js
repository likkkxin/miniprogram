// pages/index/index.js

Page({
  data: {
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔，单位ms
    duration: 500, // 滑动动画时长，单位ms
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    imageUrls: [
      'http://www.delispring.top/wp-content/uploads/2019/05/20160204211909_34383.png',
      'http://www.delispring.top/wp-content/uploads/2019/05/20160204211909_34383.png',
      'http://www.delispring.top/wp-content/uploads/2019/05/20160204211909_34383.png',
    ],
  },
});
