<template>
	<div class="lite-page-wrap">
		<div class="main-top">
			<component-simp-header></component-simp-header>
			<!-- <component-back-header msg="会员主页"></component-back-header> -->
		</div>
		<div class="user-info">
			<div class="header">
				<i class="user-face">
					<img src="../assets/userface.jpg" alt="">
				</i>
				<h3>中国新闻周刊</h3>
				<p>微博认证：澎湃新闻，专注时政与思想的媒体开放平台</p>
			</div>
			<div class="footer">
				<div class="count">
					<span>3301</span>
					<span>关注</span>
				</div>
				<div class="count">
					<span>4.4千万</span>
					<span>粉丝</span>
				</div>
				<button class="like-btn">
					<span>关注</span>
				</button>
				<button class="msg-btn">
					<span>信息</span>
				</button>
			</div>
		</div>
		<component-articles></component-articles>
	</div>
</template>
<script>
export default {
	name:'UserNew',

}
</script>
<style scoped>
	.user-info {
		/* border-bottom:1px solid #dcdcdc; */
		padding:8px 15px;
		background-color:#fff;
	}
	.user-info .header {
		position: relative;
		padding-left:80px;
	}
	.user-info .user-face {
		position:absolute;
		top:0;
		left:0;
		display:inline-block;
		width:64px;
		height:64px;
		border-radius:50%;
		overflow:hidden;
	}
	.user-info .user-face img {
		width:100%;
		height:auto;
		min-height:100%;
		object-fit:cover;
	}
	.user-info .header h3 {
		margin:0;
		line-height:30px;
		margin-bottom:6px;
		font-weight: normal;
		font-size:20px;
	}
	.user-info .header p {
		line-height:19px;
		font-size:13px;
		margin:0;
		color:#666;
	}
	.user-info .footer {
		display:flex;
		flex-flow:row nowrap;
		justify-content: space-between;
		padding:18px 0;
	}
	.user-info .footer button {
		padding:0;
		margin:0;
		border:0;
		font-size:16px;
		line-height:34px;
	}
	.user-info .footer .like-btn {
		width:120px;
		background-color:#5290CC;
		color:#fff;
		border-radius:5px;
	}
	.user-info .footer .msg-btn {
		color:#666;
		border:1px solid #dcdcdc;
		border-radius:5px;
		padding:0 5px;
		background-color:#fff;
	}
	.user-info .footer .count {
		font-size:13px;
		color:#000;
		text-align:center;
		line-height:17px;
	}
	.user-info .footer .count span {
		display:block;
	}
</style>
