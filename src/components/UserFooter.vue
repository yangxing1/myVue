<template>
	<div class="bar-tab">
		<div class="nav-inner">
			<ul class="nav-item">
				<li class="cur">
					<span>聊天</span>
				</li>
				<li>
					<span>关注</span>
				</li>
				<li>
					<span>文章</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name:'UserFooter',
}
</script>
<style scoped>
	.bar-tab {
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		height:44px;
		line-height:44px;
		border-top:1px solid #dcdcdc;
		background-color:#fff;
		z-index:999;
	}
	.bar-tab ul,
	.bar-tab li {
		margin:0;
		padding:0;
	}
	.bar-tab .nav-inner {
		padding:0 12px;
	}
	.bar-tab .nav-inner .nav-item {
		display:flex;
		flex-flow:row nowrap;
		justify-content: space-between;
		align-items:center;
	}
	.bar-tab .nav-item > li {
		display:block;
		width:100%;
		flex:1 1 auto;
		text-align:center;
		font-size:14px;
		color:#333;
	}
	.bar-tab .nav-item > li.cur {
		color:#FF8200;
	}
</style>
