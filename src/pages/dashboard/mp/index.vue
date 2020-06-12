<template>
  <van-tabbar
    :active="dashboard.activeTab"
    :fixed="isfixed"
    @change="onChange1"
    :active-color="activecolor"
    :safe-area-inset-bottom="true"
    class="dasshboard"
  >
    <van-tabbar-item
      v-for="(item, index) in tabbars"
      :key="index"
      :info="item.num ? item.num : ''"
    >
      <image slot="icon" :src="item.normal" mode="aspectFit" class="img" />
      <image
        slot="icon-active"
        :src="item.active"
        mode="aspectFit"
        class="img"
      />
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "DashBoard",
  data() {
    return {
      activecolor: "rgb(117, 163, 66)",
      isfixed: true,
      active1: 0,
      tabbars: []
    };
  },
  methods: {
    onChange1(event) {
      //最好手动赋值一下,要不值不是最新的
      this.active1 = event.mp.detail;

      //  this.$store.dispatch("dashboard/setActiveTab", this.active1);

      let tab = this.tabbars[this.active1];

      // this.$router.push({ path: `/pages/${tab.name}/mp/main`, query: { id:tab.name  } })

      // this.$router.push({ name:tab.name, query: { id:tab.name  }})
      this.$router.push({ name: tab.name });

      //this.$emit("onTabsChange", this.tabbars[this.active1]);
    }
  },
  computed: {
    ...mapState(["dashboard"])
  },
  mounted() {
    this.tabbars = this.dashboard.tabbars;
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
