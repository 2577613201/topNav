// pages/publicPage/topNav/topNav.js
const app = getApp()
Component({
  data: {
    // 这里是一些组件内部数据

    statusBarHeight: app.globalData.statusBarHeight,
    titleBarHeight: app.globalData.titleBarHeight

  },
  properties: {
    title: {
      type: String,
      value: '头部标题'
    },
    isShowBack: {
      type: String,
      value: "true"
    }
  },
  methods: {
    goback() {
      wx.navigateBack();
    },
  }

})