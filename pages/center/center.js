// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[
      { title: '选项一', type: 1 }, { title: '选项二', type: 2 }, { title: '选项三', type: 3}
    ],
    // item: { title: '选项二', type: 2 },
    itemCont:'选项一',
    id:1,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击导航栏使产品变化时
  productChange(e) {
    this.setData({ id: e.detail })  ;    //接受子组件传来的值
    this.change();

  },
  change(){
    if(this.data.id==1){
      this.setData({ itemCont:'选项一' });
    } else if (this.data.id == 2) {
      this.setData({ itemCont: '选项二' });
    } else if (this.data.id == 3) {
      this.setData({ itemCont: '选项三' });
    }
  }
})