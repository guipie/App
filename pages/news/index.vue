<template>
	<view>
		<view class="wrap">
			<u-tabs name="tab_name" bg-color="#000000" inactive-color="#efefef" active-color="#ff0000" count="5" :list="list"
			 :is-scroll="false" :current="current" @change="tabChange"></u-tabs>
			<news-video v-for="item in 10" :key="item"></news-video>
		</view>
	</view>
</template>

<script>
	import newsItem from '../../components/news/news_item.vue'
	import newsItemMicro from '../../components/news/news_item_micro.vue'
	import newsVideo from '../../components/news/news_video.vue'
	export default {
		name: "newsIndex",
		components: {
			newsItem,
			newsItemMicro,
			newsVideo
		},
		data() {
			return {
				list: [{
						tab_name: '待付款'
					},
					{
						tab_name: '待发货'
					},
					{
						tab_name: '待收货'
					},
					{
						tab_name: '待评价',
						count: 12
					}
				],
				current: 0
			};
		},
		onLoad() {},
		methods: {
			tabChange() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus.splice(this.current, 1, "loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			},
			// 页面数据
			getOrderList(idx) {
				for (let i = 0; i < 5; i++) {
					let index = this.$u.random(0, this.dataList.length - 1);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			// 总价
			totalPrice(item) {
				let price = 0;
				item.map(val => {
					price += parseFloat(val.price);
				});
				return price.toFixed(2);
			},
			// 总件数
			totalNum(item) {
				let num = 0;
				item.map(val => {
					num += val.number;
				});
				return num;
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				this.getOrderList(index);
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>
