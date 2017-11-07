require ('assets/css/init.less');
require ('assets/css/base.less');
require ('assets/css/index.less');

import axios from 'axios';

import Vue from 'vue';

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.prototype.axios = axios;


import C from './conf'; 	//全局的站点配置文件
import M from './common'; 	//全局的共用事件
import './iconfont'  //字体库

import vueFilter from './vueFilter';  	//全局过滤器


export default{
	M,C
}