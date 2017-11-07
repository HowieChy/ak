<template>
<div id="app">

	<ul>

		<li>
			<router-link to='/index'>首页</router-link>
		</li>
		<li>
			<router-link to='/order'>订单</router-link>
		</li>
	</ul>
	<router-view></router-view>
	<!--公用底部组件-->
	<McFoot></McFoot>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

/*底部组件*/
import McFoot from 'components/McFoot';





export default {
  data() {
    return {

	}
  },
    components: {
        McFoot
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){



  },
  //相关操作事件
  methods: {



  }
}
</script>

<style lang="less">



</style>
