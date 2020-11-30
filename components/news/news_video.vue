<template>
	<u-card>
		<view class="item" slot="head">
			<view class="left">
				<u-avatar :src="news.covers" size="mini" mode="circle"></u-avatar>
				<span>4e4非洲南非</span>
			</view>
			<view class="right">
				<u-button shape="square" size="mini" type="error">关注</u-button>
			</view>
		</view>
		<view class="" slot="body">
			<video id="myVideo" src="https://zk2.cdt-md.com/2020/11/25/NwREuSlqFB7JRy2B/playlist.m3u8" controls></video>
		</view>
		<view class="" slot="foot">
			<u-icon name="chat-fill" size="34" label="30评论"></u-icon>
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
		},
		mounted() {

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
