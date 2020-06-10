<template>
  <div class="goods">
    <div>
      <van-image height="414" width="100%" :src="goods.thumb" />
    </div>
    <van-cell-group border="false">
      <van-cell custom-class="goods-message" :title="goods.title" :label="goods.price" />
      <van-cell custom-class="goods-express" :border="false">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group custom-class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <div slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </div>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="我的" @click="sorry" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="sorry" />
      <van-goods-action-button text="加入购物车" type="warning" @click="sorry" />
      <van-goods-action-button text="立即购买" @click="sorry" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      goods: {
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: "/static/images/goods/e5a5a02309a41f9f5def56684808d9ae.jpeg"
      }
    };
  },

  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },

    onClickCart() {
      wx.showToast({
        title: "暂无后续逻辑~",
        icon: "none"
      });
    },

    sorry() {
      wx.showToast({
        title: "暂无后续逻辑~",
        icon: "none"
      });
    },
    user() {
      this.$router.push("user");
    }
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
