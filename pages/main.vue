<template>
	<view>
		<view class="u-page">
			<news-index></news-index>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar @change="tabChange" v-model="current" bg-color="#000000" active-color="#FFFFFF" :list="list" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	import newsIndex from './news/index.vue'
	export default {
		components: {
			newsIndex
		},
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
					},
					{
						iconPath: "photo",
						selectedIconPath: "photo-fill",
						text: '放映厅',
						customIcon: false,
					},
					{
						iconPath: "https://cdn.uviewui.com/uview/common/min_button.png",
						selectedIconPath: "https://cdn.uviewui.com/uview/common/min_button_select.png",
						text: '发布',
						midButton: true,
						customIcon: false,
					},
					{
						iconPath: "play-right",
						selectedIconPath: "play-right-fill",
						text: '直播',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
					},
				],
				current: 0
			}
		},
		methods: {
			tabChange(index) {
				console.log(index)
			}
		}
	}
</script>
