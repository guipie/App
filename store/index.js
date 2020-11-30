import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const context = require.context('', false, /\.js$/);
const moduleStores = {};

context.keys().forEach(key => {
	// 获取读取到的文件名字并且截取
	const fileName = key.slice(2, -3);
	//通过 context(key)导出文件内容
	const fileModule = context(key).default;
	moduleStores[fileName] = {
		...fileModule,
	};
});
export default new Vuex.Store({
	modules: {
		...moduleStores,
	},
});
