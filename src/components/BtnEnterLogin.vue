<template>
	<div class="lite-enter-btns">
		<a @click="$router.push('/login')" class="lite-sign-in">登录/注册</a>
	</div>
</template>
<script>
export default {
	name:'BtnEnterLogin',
	created() {

	}
}
</script>

<style>
	.lite-enter-btns {
		position:fixed;
		width:100%;
		bottom:30px;
		left:0;
		text-align:center;
	}
	.lite-enter-btns .lite-sign-in {
		display:inline-block;
		width:130px;
		height:38px;
		line-height:38px;
		font-size:16px;
		color:#fff;
		text-align:center;
		border-radius:19px;
		background-color:#1b9af4;
		box-shadow:0 6px 30px 0 #3460b747;
	}
</style>
