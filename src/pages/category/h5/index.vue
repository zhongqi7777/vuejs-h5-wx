<template>
  <div class="category">
    <div class="logo">
      <router-link to="/goods">category</router-link>
    </div>
  </div>
</template>
<script>
import tmp from "../mp/index";
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Row,
  Field,
  Tab,
  Tabs,
  Button
} from "vant";
export default {
  extends: tmp,
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Field.name]: Field,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  //keep-alive 组件激活时调用 如果你使用keep-alive进行缓存， 又希望每次切换组件的时候更新数据，那么更新数据的请求方式必须写在该钩子函数里
  activated() {
    //第一种传参取值方式
    //console.log("activated",this.$route.query.id);// this.$route.query.key

    //第二种传参取值方式
    console.log("activated", this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
