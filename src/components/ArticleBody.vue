<template>
	<article>
		<div class="info">
			<router-link to="/user" class="user-face">
				<img src="../assets/logo.png" alt="">
			</router-link>
			<div class="text-cut">
				<router-link to="/user" class="name">
					关爱老实人
				</router-link>
				<p>7小时前 来自微博weibo.com 已编辑</p>
			</div>
		</div>
		<div class="cont">
			<div class="text-cut" @click="$emit('to-status', 1)">
				<p>【王宝强前经纪人宋喆涉嫌职务侵占罪一案宣判:】18日上午,宋喆,修雨乐职务侵占案在北京朝阳法院一审宣判.被告人宋喆修雨乐因犯职务侵占罪分别被判处有期徒刑六年三年.</p>
			</div>
			<div class="img-list">
				<span>
					<i>
						<img src="../assets/img_2.jpg" alt="">
					</i>
				</span>
				<span>
					<i>
						<img src="../assets/img_2.jpg" alt="">
					</i>
				</span>
				<span>
					<i>
						<img src="../assets/img_2.jpg" alt="">
					</i>
				</span>
			</div>
		</div>
		<div class="ctr-box">
			<div class="box-btn">
				<span>分享</span>
				<span class="num">142</span>
			</div>
			<div class="box-btn">
				<span>评论</span>
				<span class="num">456</span>
			</div>
			<div class="box-btn">
				<span>点赞</span>
				<span class="num">142</span>
			</div>
		</div>
	</article>
</template>
<script>
export default {
	name:'ArticleBody',
	methods: {
		
	}
}
</script>
<style scoped>
article {
	background-color:#fff;
	/* margin: 16px; */
	/* padding:0 12px; */
}
article {
	padding-top:12px;
	border-top:1px solid #dcdcdc;
	border-bottom:1px solid #dcdcdc;
	margin-bottom:12px;
}
article .info {
	display:flex;
	flex-flow:row nowrap;
	justify-content: flex-start;
	align-items:center;
	padding:0 12px;
}
article .info .user-face {
	width:40px;
	height:40px;
	flex:0 0 40px;
	border-radius: 50%;
	overflow:hidden;
}
article .info .user-face img {
	width:100%;
	height:auto;
	min-height:100%;
	object-fit: cover;
}
article .info .text-cut {
	margin-left:12px;
	width:100%;
	flex:0 1 auto;
	text-align:left;
}
article .info .text-cut .name {
	display:inline-block;
	text-decoration: none;
	color:#F46200;
	max-width:100%;
	font-size:15px;
	line-height:1.4;
	white-space: nowrap;
	text-overflow:ellipsis;
	overflow: hidden;
}
article .info .text-cut p {
	font-size:12px;
	line-height:1.5;
	margin:0;
	color:#939393;
}
article .cont {
	padding:12px;
}
article .cont p {
	line-height: 1.5;
    word-wrap: break-word;
	color: #333;
	font-size:16px;
	margin:0;
}
article .cont .img-list {
	margin-top:12px;
	font-size:0;
	letter-spacing: -3px;
}
article .cont .img-list span {
	display:inline-block;
	padding:0 3px;
	margin-bottom:3px;
	width:33.33%;
	font-size:16px;
	letter-spacing: 0;
}
article .cont .img-list i {
	display:inline-block;
	vertical-align: top;
	width:100%;
	padding-bottom:100%;
	height:0;
	position: relative;
}
article .cont .img-list img{
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%;
	object-fit: cover;
}
article .ctr-box {
	display:flex;
	flex-flow:row nowrap;
	justify-content: space-between;
	align-items: center;
	height:34px;
	line-height:34px;
	border-top:1px solid #dcdcdc;
}
article .ctr-box .box-btn {
	width:33%;
	flex:1 1 auto;
	text-align:center;
}
article .ctr-box .box-btn span {
	display:inline-block;
	font-size:14px;
	color:#666;
}
article .ctr-box .box-btn .num {
	margin-left:3px;
	font-size:#333;
}
</style>
