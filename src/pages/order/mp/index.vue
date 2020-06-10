<template>
  <div class="order">
    <van-checkbox-group class="card-goods" :value="checkedGoods" @change="onChange">
      <van-checkbox
        class="card-goods__item"
        v-for="(item,index) in goods"
        :key="index"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.des"
          :num="item.num"
          :price="item.formatPrice"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedGoods: ["1", "2", "3"],
      goods: [
        {
          id: "1",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "2",
          title: "陕西蜜梨",
          desc: "约600g",
          price: 690,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        },
        {
          id: "3",
          title: "美国伽力果",
          desc: "约680g/3个",
          price: 2680,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        }
      ],
      totalPrice: 0,
      code: "",
      submitBarText: "",
      totalPrice: ""
    };
  },

  components: {},

  methods: {
    onChange(event) {
      this.checkedGoods = event.mp.detail;
      this.totalPrice = this.goods.reduce(
        (total, item) =>
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
      this.submitBarText = this.checkedGoods.length ? `结算` : "结算";
    },
    onSubmit() {
      wx.showToast({
        title: "点击结算",
        icon: "none"
      });
    }
  },
  mounted() {
    this.submitBarText = `结算`;
    this.totalPrice = this.goods.reduce(
      (total, item) =>
        total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
      0
    );
    this.goods.forEach(item => {
      item.formatPrice = (item.price / 100).toFixed(2);
    });
  }
};
</script>


<style lang="less">
@import "./index.less";
</style>
