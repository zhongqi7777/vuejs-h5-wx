
<template>
  <div>
    <van-tabbar :active="active1" :fixed="isfixed" @change="onChange1"  :active-color="activecolor">
      <!-- <van-tabbar-item info="3">
        <image
          slot="icon"
          :src="require('@/assets/images/tabbar/home_default.png')"
          mode="aspectFit"
        />
        <image
          slot="icon-active"
          :src="require('@/assets/images/tabbar/home_selected.png')"
          mode="aspectFit"
        />自定义
      </van-tabbar-item> -->
       <van-tabbar-item>
        <image
          slot="icon"
          src="/static/images/tabbar/home_default.png"
          mode="aspectFit"
          class="img"
          
        />
        <image
          slot="icon-active"
          src="/static/images/tabbar/home_selected.png"
          mode="aspectFit"
          class="img"
         
        />自定义
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
       activecolor:"rgb(117, 163, 66)",
      isfixed: false,
      active1: 0,
    //   tabbars: [
    //     {
    //       name: "home",
    //       title: "home.home",
    //       normal: require("@/assets/images/tabbar/home_default.png"),
    //       active: require("@/assets/images/tabbar/home_selected.png")
    //     },
    //     {
    //       name: "category",
    //       title: "home.category",
    //       normal: require("@/assets/images/tabbar/category_default.png"),
    //       active: require("@/assets/images/tabbar/category_selected.png")
    //     },
    //     {
    //       name: "eat",
    //       title: "home.eat",
    //       normal: require("@/assets/images/tabbar/eat_default.png"),
    //       active: require("@/assets/images/tabbar/eat_selected.png")
    //     },
    //     {
    //       name: "cart",
    //       title: "home.cart",
    //       normal: require("@/assets/images/tabbar/shoppingcart_default.png"),
    //       active: require("@/assets/images/tabbar/shoppingcart_selected.png"),
    //       num: 5
    //     },
    //     {
    //       name: "mine",
    //       title: "home.mine",
    //       normal: require("@/assets/images/tabbar/mine_default.png"),
    //       active: require("@/assets/images/tabbar/mine_selected.png")
    //     }
    //   ]
    };
  },
  methods: {
    onChange1(event) {
      //最好手动赋值一下,要不值不是最新的
      this.active1 = event.mp.detail;
    }
  }
};
</script>

<style  lang="less" scoped>
.img{
  height: 18px;
  width: 18px;
}
</style>