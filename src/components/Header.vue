<template>
	<div class="header">
		<a href="#" class="logo">logo</a>
		<div class="text-cut">{{msg}}</div>
		<a href="#" class="btn">修改</a>
		<!-- <h2 class="title">{{msg}}</h2> -->
	</div>
</template>
<script>
export default {
	name:'Header',
	props:{
		msg:{
			type:String
		}
	}
}
</script>
<style scoped>
	.header {
		display:flex;
		flex-flow:row nowrap;
		justify-content: space-between;
		align-items:center;
		height:44px;
		line-height:44px;
		text-align:center;
	}
	.header a {
		font-size:13px;
		color:#333;
		text-decoration: none;
	}
	.header .logo {
		width:20%;
	}
	.header .text-cut {
		width:70%;
		flex:0 0 70%;
		height:28px;
		line-height:28px;
		padding:0;
		text-indent:10px;
		font-size:14px;
		color:#bdbdbd;
		background-color:#ebebec;
		text-align: left;
	}
	.header .btn {
		width:20%;
	}
</style>
