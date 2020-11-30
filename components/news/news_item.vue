<template>
	<u-card v-if="news.covers.length==3" :title="news.title" :thumb="news.covers">
		<view class="" slot="body">
			<image :src="news.covers" mode="aspectFill"></image>
			<image :src="news.covers" mode="aspectFill"></image>
			<image :src="news.covers" mode="aspectFill"></image>
		</view>
		<view class="" slot="foot">
			<u-tag text="3天前" type="info" />
			<u-icon name="chat-fill" size="34" label="30评论"></u-icon>
		</view>
	</u-card>
	<u-card v-else-if="news.covers>0">
		<view class="" slot="body">
			<view class="u-body-item u-flex u-row-between u-p-b-0">
				<view class="u-body-item-title u-line-2">{{news.title}}</view>
				<image :src="news.covers" mode="aspectFill"></image>
			</view>
		</view>
		<view class="" slot="foot">
			<u-tag text="3天前" type="info" />
			<u-icon name="chat-fill" size="34" label="30评论"></u-icon>
		</view>
	</u-card>
	<u-card v-else :title="news.title" :thumb="news.covers">
		<view class="" slot="body">
			<u-tag text="3天前" type="info" />
			<u-icon style="float: right;" name="chat-fill" size="34" label="30评论"></u-icon>
		</view>
	</u-card>
</template>

<script>
	export default {
		data() {
			return {
				news: {
					title: '釉色渲染仕女图韵味被私藏，而你嫣然的一笑如含苞',
					covers: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				}
			};
		}
	};
</script>

<style scoped lang="scss">
	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-left: 12rpx;
	}

	.item {
		display: flex;
		margin: 5rpx 0 0;

		.left {
			margin-right: 20rpx;
			width: 60%;
		}

		.left span {
			padding-left: 10rpx;
		}

		.right {
			margin-right: 20rpx;
			padding-top: 20rpx;
			width: 40%;
			text-align: right;
		}
	}
</style>
