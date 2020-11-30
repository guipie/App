<template>
	<u-card>
		<view class="item" slot="head">
			<view class="left">
				<u-avatar :src="thumb" size="mini" mode="circle"></u-avatar>
				<span>4e4非洲南非</span>
			</view>
			<view class="right">
				<u-button shape="square" size="mini" type="error">关注</u-button>
			</view>
		</view>
		<view class="" slot="body">
			<view class="u-body-item u-flex u-row-between u-p-b-0">
				<view class="u-body-item-title u-line-2">釉色渲染仕女图gdfggdf韵味 一笑如含苞待放</view>
			</view>
			<u-row gutter="16">
				<u-col span="4">
					<u-image style="height: 150rpx;" :src="thumb" :fade="true" duration="450"></u-image>
				</u-col>
				<u-col span="4">
					<u-image style="height: 150rpx;" :src="thumb" :fade="true" duration="450"></u-image>
				</u-col>
				<u-col span="4">
					<u-image style="height: 150rpx;" :src="thumb" :fade="true" duration="450"></u-image>
				</u-col>
			</u-row>
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
				title: '素胚勾勒出青花，笔锋浓转淡',
				subTitle: '2020-05-15',
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			};
		}
	};
</script>

<style scoped lang="scss">
	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		margin: 5rpx 0 0;
	}

	.left {
		margin-right: 20rpx;
		width: 60%;
	}

	.right {
		margin-right: 20rpx;
		padding-top: 20rpx;
		width: 40%;
		text-align: right;
	}
</style>
