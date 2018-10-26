<template>
	<div class="info">
		<div>
			<i class="face img">
				<img src="../assets/logo.png" alt="">
			</i>
			<h3 class="username">小段子</h3>
			<p>
				<span>关注343</span>
				<span>粉丝123312</span>
			</p>
			<p>微博认证:知名搞笑幽默博主</p>
		</div>
	</div>
</template>
<script>
export default {
	name:'UserInfo'
}
</script>
<style scoped>
.info {
	position:relative;
	width:100%;
	height:27vh;
	background-image: url("../assets/userinfo_drop.jpg");
	background-position: center center;
	background-size:100% auto;
	color:#fff;
	text-shadow: 0 1px 1px rgba(0,0,0,.5);
}
.info:before {
	position:absolute;
	opacity: .7;
	top:0;
	left:0;
	width:100%;
	height:100%;
	content:'';
	display:inline-block;
	background: linear-gradient(180deg,rgba(0,0,0,.01) 40%,rgba(0,0,0,.95));
	background: -webkit-linear-gradient(270deg,rgba(0,0,0,.01) 40%,rgba(0,0,0,.95));
    background: -webkit-gradient(linear,left top,left bottom,color-stop(40%,rgba(0,0,0,.01)),to(rgba(0,0,0,.95)));
    background: -webkit-linear-gradient(top,rgba(0,0,0,.01) 40%,rgba(0,0,0,.95));
    background: -moz- oldlinear-gradient(top,rgba(0,0,0,.01) 40%,rgba(0,0,0,.95) 100%);
    background: -o-linear-gradient(top,rgba(0,0,0,.01) 40%,rgba(0,0,0,.95) 100%);
}
.info > div {
	position:relative;
	z-index:2;
	padding-top:10px;
}
.info .face {
	position:relative;
	display:block;
	width:70px;
	height:70px;
	margin:auto;
}
.info .face:before {
	content: '';
	position:absolute;
	top:-3px;
	left:-3px;
	width:76px;
	height:76px;
	border-radius:50%;
	background-color: hsla(0,0%,100%,.4);
}
.info .face img {
	display:inline-block;
	vertical-align: top;
	position:relative;
	width:100%;
	height:100%;
	object-fit: cover;
	border-radius:50%;
}
.info h3 {
	padding: 10px 0;
	text-align:center;
	margin:0;
	font-weight: normal;
	font-size:18px;
}
.info p {
	font-size:12px;
	text-align:center;
	margin:0;
	margin-bottom:5px;
}
.info p > span {
	padding:0 10px;
}
.info p > span:first-child {
	border-right:1px solid #dcdcdc;
}
</style>