<template>
	<div class="main-wrap">
		<div class="main-top">
			<component-header msg="大家都在搜:沪指跌破2500"></component-header>
			<component-nav-tags :tags="tags"></component-nav-tags>
		</div>
		<component-articles></component-articles>
		<component-enter-login></component-enter-login>
	</div>
</template>
<script>
export default {
	name:'Home',
	components:{
		
	},
	data() {
	return {
		tags: [
			{ url:'#',name:'新鲜事' },
			{
				url:'#',
				name:'热门'
			},
			{
				url:'#',
				name:'搞笑'
			},
			{
				url:'#',
				name:'情感'
			},
			{
				url:'#',
				name:'情感'
			},
			{
				url:'#',
				name:'情感'
			},
			{
				url:'#',
				name:'情感'
			},
			{
				url:'#',
				name:'情感'
			}
			]
		};
	},
	methods:{
		
	}
}
</script>
<style>
	.main-wrap {
		margin:88px auto 44px auto;
		width:100%;
		max-width:750px;
	}
	.main-top {
		max-width:750px;
		width:100%;
		position:fixed;
		top:0;
		left:0;
		right:0;
		margin:auto;
		background-color:#fafafa;
		z-index:999;
		/* border-bottom:1px solid #dcdcdc; */
	}
</style>

