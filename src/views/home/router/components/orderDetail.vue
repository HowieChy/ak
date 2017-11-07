<template>
	<div class="g-detail">
		<div class="m-crumb">
			<a href="">我的订单</a><em>&gt;</em><span>订单详情</span>
		</div>
		<h4>2017年6月22号 15:27 <span></span>订单号:1321451897<button>立即支付</button></h4>

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
  	
  	
  },


  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
		console.log(this.$route.query);

  },

   computed:{

  },
  //相关操作事件
  methods: {


  }
}
</script>

<style lang="less">






</style>
