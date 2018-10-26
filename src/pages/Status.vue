<template>
	<div class="lite-page-wrap">
		<div class="main-top">
			<component-back-header msg="微博正文"></component-back-header>
		</div>
		<component-article></component-article>
	</div>
</template>
<script>
export default {
	name:'Status'
}
</script>
<style>
	.lite-page-wrap {
		margin: 44px auto 44px auto;
		width: 100%;
		max-width: 750px;
		background-color:#f7f7f7;
	}
</style>

