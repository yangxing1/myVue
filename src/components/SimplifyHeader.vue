<template>
	<div class="lite-page-top">
		<div class="nav-left" @click="toBack">返回</div>
		<div class="nav-main" v-if="msg">
			<h4>{{msg}}</h4>
		</div>
	</div>
</template>
<script>
export default {
	name:'BackHeader',
	props:{
		msg:{
			type:String
		}
	},
	methods: {
		toBack() {
			window.history.length > 1
				? this.$router.go(-1)
				: this.$router.push('/')
		}
	}
}
</script>
<style scoped>
	.lite-page-top {
		display:flex;
		height:44px;
		line-height:44px;
		text-align:center;
		background-color:#fff;
	}
	.lite-page-top .nav-main {
		font-size:16px;
		color:#282f3c;
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		height:44px;
	}
	.lite-page-top .nav-main h4 {
		margin:0;
	}
	.lite-page-top .nav-left,
	.lite-page-top .nav-right {
		position:absolute;
		top:0;
		font-size:16px;
		color:#282f3c;
		height:44px;
		z-index:2;
	}
	.lite-page-top .nav-left {
		left:10px;
	}
	.lite-page-top .nav-right {
		right:10px;
	}
</style>
