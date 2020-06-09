<template>
<div class="head">
     <van-search :value="value"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"/>
</div>
</template>
<script type="text/javascript">


export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
         onSearch ( event ) {
        console.log( event )

        //要搜索的值
        let val = event.mp.detail;
        console.log( val )

        console.log( this.value1 )

        wx.showToast( {
          title : val , //提示的内容,
          icon : 'success' , //图标,
          duration : 2000 , //延迟时间,
          mask : true , //显示透明蒙层，防止触摸穿透,
          success : res => {
            console.log( res )
          }
        } );

        // 最好 把模型同步一下
        this.value1 = val;
      } ,
      //取消
      onCancel ( event ) {
        //这个参数好像没有啥用
        console.log( event )

        this.value1 = "";
      } ,
  },
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
