<template>
      <van-search :value="value2"
                placeholder="请输入搜索关键词"
                use-action-slot
                @change="onchange2"
                @search="onSearch2">
      <div slot="action"
            @tap="userSearch">搜索
      </div>
    </van-search>
</template>
<script type="text/javascript">

export default {
  data () {
    return {
      showBgColor: false,
        value2 : ''
    }
  },
  mounted () {
  },
  methods: {
    handleScroll () {
    },
    // 到搜索界面
    goSearch () {
    //   // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。
    //   this.$toast({
    //     message: this.$t('common.unrealized'),
    //     duration: 800
    //   });
    },
       onSearch2 ( event ) {
        console.log( event )

        let val = event.mp.detail;
        console.log( val )
        this.value2 = val;
      } ,
       onchange2 ( event ) {
        console.log( event )

        let val = event.mp.detail;
        console.log( val )

        // 最好 把模型同步一下
        this.value2 = val;
      } ,
      userSearch ( event ) {
        console.log( event )

        //要从模型this.value2中取值

        wx.showToast( {
          title : this.value2 , //提示的内容,
          icon : 'success' , //图标,
          duration : 2000 , //延迟时间,
          mask : true , //显示透明蒙层，防止触摸穿透,
          success : res => {
            console.log( res )
          }
        } );
      } ,
  },
  beforeDestroy () {
   
  }
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
