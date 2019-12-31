// pages/publicPage/topNav/topNav.js
const app = getApp()
Component({
  data: {
    // 这里是一些组件内部数据
    statusBarHeight: app.globalData.statusBarHeight,
    titleBarHeight: app.globalData.titleBarHeight,

    index: 0,
    productlist: [],

  },
  properties: {
    isShowBack: {
      type: String,
      value: "true"
    },
    products: {
      type: Object
    },
    item: {
      type: Object
    }
  },
  // 组件生命周期函数，可以为函数，或一个在methods段中定义的方法名
  ready: function () {
    var arr = [];
    for (var i in this.properties.products) {
      arr.push(this.properties.products[i].title)
    }
    this.setData({ productlist: arr })
    if (this.properties.item) {
      for (var i in this.properties.products) {
        if (this.properties.item.title == this.properties.products[i].title) {
          this.setData({
            index: i,
          })
          this.triggerEvent('productChange', this.properties.item.type)
        }
      }
    }
  },

  methods: {
    //改变头部值
    bindPickerChange: function (e) {

      this.setData({
        index: e.detail.value
      })
      this.triggerEvent('productChange', e.currentTarget.dataset.products[e.detail.value].type)     //通过triggerEvent将参数传给父组件
    },
    goback() {
      wx.navigateBack();
    }
  }
})