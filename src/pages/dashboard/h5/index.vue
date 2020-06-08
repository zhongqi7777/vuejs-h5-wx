
<template>
  <div>
    <!-- 缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />

    <van-tabbar v-model="active" :safe-area-inset-bottom="true" active-color="#75a342">
      <!-- 给购物车的Tabbar加个ID 方便做加入购物车的小球动画 -->
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        :id="index == 3 ? 'buycar' : ''"
        @click="tab(index, item.name)"
        :info="item.name == 'cart' ? goodsNum : ''"
      >
        <span :class="currIndex == index ? active : ''">{{ $t(item.title)}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "DashBoard",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "home.home",
          normal: require("static/images/tabbar/home_default.png"),
          active: require("static/images/tabbar/home_selected.png")
        },
        {
          name: "category",
          title: "home.category",
          normal: require("static/images/tabbar/category_default.png"),
          active: require("static/images/tabbar/category_selected.png")
        },
        {
          name: "eat",
          title: "home.eat",
          normal: require("static/images/tabbar/eat_default.png"),
          active: require("static/images/tabbar/eat_selected.png")
        },
        {
          name: "cart",
          title: "home.cart",
          normal: require("static/images/tabbar/shoppingcart_default.png"),
          active: require("static/images/tabbar/shoppingcart_selected.png"),
          num: 5
        },
        {
          name: "mine",
          title: "home.mine",
          normal: require("static/images/tabbar/mine_default.png"),
          active: require("static/images/tabbar/mine_selected.png")
        }
      ]
    };
  },
  watch: {
    // 监听路由变化,保证路由跳转Tabbar选中正常
    $route: {
      handler(val, oldval) {
        this.tabbarSelected(val.name);
      }
    },
    deep: true
  },
  created() {
    //通过路由跳转绑定Tabbar的选中
    this.tabbarSelected(this.$route.name);
  },
  computed: {
    //...mapState(['shopCart'], ['userInfo']),
    goodsNum() {
      return 1;
    }
  },
  methods: {
    // 1.点击tabbar触发的方法

    // router 传参方式
    // 第一种
    //传递参数  -- this.$router.push({path: ' 路由 ', query: {key: value}})
    //参数取值  -- this.$route.query.key

    //第二种
    //传递参数  -- this.$router.push({name: ' 路由的name ', params: {key: value}})
    //参数取值  -- this.$route.params.key

    //备注
    //第二种传参方式
    //使用这种方式，参数不会拼接在路由后面，地址栏上看不到参数、
    //由于动态路由也是传递params的，所以在 this.$router.push() 方法中 path不能和params一起使用，否则params将无效。需要用name来指定页面。
    //及通过路由配置的name属性访问
    tab(index, val) {
      this.currIndex = index;
      //this.$router.push(val);

      this.$router.push({path:val,query:{id:val}});
      // console.log(index,val);
    },
    tabbarSelected(item) {
      const mapType = {
        home: 0,
        category: 1,
        eat: 2,
        cart: 3,
        mine: 4
      };
      this.active = mapType[item];
    }
  }
};
</script>

<style  lang="less" scoped>
</style>