
<template>
	<div>
      <h2>ORDER</h2>

      <button @click="goDetail('/order/detail')">订单详情</button>

      <router-view></router-view>

	</div>

</template>

<script>

import Lib from 'assets/js/Lib';




export default {
  data() {
    return {


    }
  },
    components: {

    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
      document.title = '我的订单';
  },

  created:function(){

  },

  //在挂载开始之前被调用
  beforeMount(){
  
  },

  //已成功挂载，相当ready()
  mounted(){

  },
   computed:{

  },
    watch:{
        $route(to,from){
            console.log(to,from)
			if(from.path=='/order/detail'){

			}

        }
    },
  //相关操作事件
  methods: {
    goDetail(val){
      console.log(val)
      this.$router.push(val);
    }
  }
}
</script>

<style lang="less">



</style>
