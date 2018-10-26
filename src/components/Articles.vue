<template>
	<div class="list">
		<component-article @to-status="toStatus($event)"></component-article>
		<component-article @to-status="toStatus($event)"></component-article>
		<component-article @to-status="toStatus($event)"></component-article>
		<component-article @to-status="toStatus($event)"></component-article>
	</div>
</template>
<script>
export default {
	name:'Articles',
	methods: {
		toStatus($event) {
			alert($event);
			this.$router.push(
				{ path:'/status', params: {$event} }
			)
		}
	}
}
</script>
<style scoped>
.list {
	background-color:#f2f2f2;
}
</style>

