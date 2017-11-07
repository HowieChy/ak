
<template>
    <div id="app">

        <div>
            <p>欢迎使用</p>
        </div>
  <h2>123213</h2>
    </div>
</template>
<script>



import Lib from 'assets/js/Lib';

/*底部组件*/
import McFoot from 'components/McFoot';

import $ from 'jquery';

import { Toast } from 'mint-ui';


export default {
  data() {
    return {

    }
  },
    components: {
        McFoot,
    },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){


  },
  //在挂载开始之前被调用
  beforeMount(){


  },
  //已成功挂载，相当ready()
  mounted(){

        //Toast('提示信息');

      	if(Lib.M.store.get('userInfo')){
            this.userId=Lib.M.store.get('userInfo').ipPk;
            console.log(this.userId)
		}

	  //左侧导航
      this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/tree?methCd=9040')
          .then(res=>{
              console.log(res.data)
          }).catch(err=>{
          console.log(err);
      });


  },


  //相关操作事件
  methods: {


      //购买商品
      addShop(item,index){
          var Qs = require('qs');
          //this.axios.post('/api/mall/bss/cart/add', Qs.stringify({
         	this.axios.post(Lib.C.url_mc+'/mall/bss/cart/add', Qs.stringify({
              ipPk:this.userId,
              prodPk:item.prodPk,
              prodNum:item.number
          }),{
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              }
          })
              .then(res=>{
                  console.log(res.data);
                  if(res.data.status==200){
                      this.$alert(res.data.msg, '提示', {
                          confirmButtonText: '确定',
                          callback: action => {

                          }
                      });

                  }
                  if(res.data.status==400){
                      this.$alert(res.data.msg, '提示', {
                          confirmButtonText: '确定',
                          callback: action => {

                          }
                      });
                  }
              }).catch(err=>{
              console.log(err);
          });


  }
  }
}
</script>

<style scoped lang="less">
@import "../../../assets/css/init";
h2{
  background: orange;
  font-size: 0.5rem;
  display: flex;
  flex: 1;
  color: @zi-color;
}
</style>
