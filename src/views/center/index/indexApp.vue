
<template>
    <div id="app">

      <header>个人中心</header>

      <div class="g-info">
        <img src="./assets/images/phone.jpg" alt="">
        <h2>Howie</h2>
        <p><em></em>余额：￥120.00</p>
      </div>

      <ul class="g-list">
        <li>
          <img src="./assets/images/list1.jpg" alt="">
          <p>订单管理</p>
        </li>
        <li>
          <img src="./assets/images/list2.jpg" alt="">
          <p>地址管理</p>
        </li>
        <li>
          <img src="./assets/images/list3.jpg" alt="">
          <p>卡卷管理</p>
        </li>
      </ul>

      <ul class="g-href">
        <li><a href=""><img src="./assets/images/a1.jpg" alt=""><i>个人资料</i> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-more"></use></svg></a>
        </li>
        <li><a href=""><img src="./assets/images/a2.jpg" alt=""><i>帮助中心</i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-more"></use></svg></a>
          </li>
        <li><a href=""><img src="./assets/images/a3.jpg" alt=""><i>关于我们</i><svg class="icon" aria-hidden="true"><use xlink:href="#icon-more"></use></svg></a>
          </li>
      </ul>

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



//      	if(Lib.M.store.get('userInfo')){
//            this.userId=Lib.M.store.get('userInfo').ipPk;
//            console.log(this.userId)
//		}
//
//      this.axios.get(Lib.C.url_mc+'/mall/sys/sysCat/tree?methCd=9040')
//          .then(res=>{
//              console.log(res.data)
//          }).catch(err=>{
//          console.log(err);
//      });


  },


  //相关操作事件
  methods: {



//      addShop(item,index){
//          var Qs = require('qs');
//          //this.axios.post('/api/mall/bss/cart/add', Qs.stringify({
//         	this.axios.post(Lib.C.url_mc+'/mall/bss/cart/add', Qs.stringify({
//              ipPk:this.userId,
//          }))
//              .then(res=>{
//                  console.log(res.data);
//                  if(res.data.status==200){
//
//                  }
//                  if(res.data.status==400){
//
//                  }
//              }).catch(err=>{
//              console.log(err);
//          });
//    }
  }
}
</script>


<style scoped lang="less">

@import "../../../assets/css/init.less";

  header{
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 0.4rem;
    background: #ffffff;
    border-bottom: 1px solid #d5d5d5;
  }
  .g-info{
    height: 3.75rem;
    background: #fff;
    border-bottom: 1px solid #d5d5d5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #d5d5d5;
      border-radius: 50%;
    }
    h2{
      font-size: 0.34rem;
      padding:  0.15rem 0 0.35rem 0;
      font-weight: bold;
    }
    p{

      background: url("./assets/images/money.jpg") no-repeat;
      padding-left: 0.5rem;
      background-size: contain;
      font-size: 0.28rem;
      font-weight: bold;
    }
  }
  .g-list{
      display: flex;
      padding: 0.6rem 0;
      border-bottom: 1px solid #d5d5d5;
      margin-bottom: 0.2rem;
      background: #fff;
      img{
        width: 0.52rem;
        height: 0.52rem;
        margin-bottom: 0.14rem;
      }
      li{
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      p{
        font-size: 0.3rem;
        font-weight: bold;
      }
  }
  .g-href{
    border-top: 1px solid #d5d5d5;
    background: #fff;
    li{
      padding:0.34rem ;
      border-bottom: 1px solid #d5d5d5;

    }
    a{
      display: flex;
      align-items: center;

    }
    img{
      width: 0.35rem;
      height: 0.35rem;
      margin-right: 0.2rem;
    }
    i{
      font-size: 0.3rem;
      font-weight: bold;
      width: 86%;
      line-height: 0.4rem;
      height: 0.35rem;
    }
    .icon{
      font-size: 0.3rem;
    }
  }
</style>
