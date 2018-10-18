var util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    location:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var index = options.id
    this.setData({
      detailList:util.detailList[index],
      shopsList: util.shopsList[index],
      subtitle: util.shopsList[index].subtitle.slice(0,6),
      imgPath: util.imgPath[index].imgPath,    //小图
      preview: util.imgPath[index].preview,     //大图
      location: util.shopsList[index].location
    })
  },
  //点击图片事件
  bindPic:function(ev){
    var picindex = ev.currentTarget.dataset.picindex;
    wx.previewImage({
      current: this.data.preview[picindex],   // 当前显示图片的http链接
      urls: this.data.preview    // 需要预览的图片http链接列表
    })
  },
  // 电话点击事件
  bindTel:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.detailList.tel
    })

  },
  // 地址点击事件
  bindMap:function(e){
    wx.openLocation({
      latitude: e.currentTarget.dataset.location[0].latitude,
      longitude: e.currentTarget.dataset.location[0].longitude,
      scale: 28,
      name: e.currentTarget.dataset.location[0].name,
      address: e.currentTarget.dataset.location[0].address
    })      
  }
})