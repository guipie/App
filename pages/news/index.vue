<template>
	<view>
		<view class="wrap">
			<u-tabs ref="tabs" name="tab_name" bg-color="#000000" inactive-color="#efefef" active-color="#ff0000" count="5"
			 :list="list" :is-scroll="false" :current="current" @change="tabChange"></u-tabs>
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
						name: '关注'
					},
					{
						name: '推荐'
					}
				],
				current: 0
			};
		},
		mounted() {
			this.$store.dispatch("news/fetchNewsList");
			this.$store.dispatch("news/fetchBannerNews");
		},
		methods: {
			tabChange() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus.splice(this.current, 1, "loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			}, // tab栏切换
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

<style lang="scss" scoped>
</style>
