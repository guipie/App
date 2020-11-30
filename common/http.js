import Request from '@/common/luch-request/index.js'
const baseURL = "http://localhost:9991/"
const http = new Request();
http.setConfig((config) => { /* config 为默认全局配置*/
	config.baseURL = baseURL; /* 根域名 */
	config.header = {
		'Authorization': "fff",
		'Content-Type': 'application/json'
	};
	return config
})
//请求前拦截，用来动态加参,例如token
http.interceptors.request.use((config) => { // 可使用async await 做异步操作 
	config.header = {
		...config.header,
		timespan: new Date().getSeconds()
	}
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})


// 请求后
http.interceptors.response.use((response) => {
	console.log(response)
	return response
}, (response) => {
	/*  对响应错误做点什么 （statusCode !== 200）*/
	console.log(response)
	//未登录时清空缓存跳转
	if (response.statusCode == 401) {
		uni.clearStorageSync();
		uni.switchTab({
			url: "/pages/user/user"
		})
	}
	return Promise.reject(response)
})
export {
	http
};
