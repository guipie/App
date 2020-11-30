import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

import http from '@/common/http.js';
Vue.prototype.$http = http;

import store from '@/store';
Vue.prototype.$store = store;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
