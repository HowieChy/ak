<template>

	<div class="">
		INDEX
	</div>

</template>

<script>

import Lib from 'assets/js/Lib';



export default {
  data() {
    return {

    }
  },

  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
      document.title = '个人中心';
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
