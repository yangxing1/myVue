<template>
	<div class="lite-page-wrap">
		<div class="main-top">
			<component-back-header msg="会员主页"></component-back-header>
		</div>
		<component-user-info></component-user-info>
		<div class="nav-top" >
			<div class="nav-inner" :class="{toFixed:nav_status==='fixed'}">
				<ul class="nav-item">
					<li @click="changeTab('index')" :class="{cur:tab_status==='index'}">主页</li>
					<li @click="$router.push('/user_new')">微博</li>
					<li @click="changeTab('video')" :class="{cur:tab_status==='video'}">视频</li>
					<li @click="changeTab('album')" :class="{cur:tab_status==='album'}">相册</li>
				</ul>
			</div>
		</div>
		<div>
			<component-articles v-if="tab_status==='index'"></component-articles>
			<component-articles v-if="tab_status==='video'"></component-articles>
			<component-articles v-if="tab_status==='album'"></component-articles>
		</div>
		<component-user-bar></component-user-bar>
	</div>
</template>
<script>
export default {
	name:'User',
	data() {
		return {
			tab_status:'index',
			nav_status:'default'
		}
	},
	created() {
		var self = this;
		var nav_scroll_height = window.screen.availHeight * 27 / 100;
		document.body.onscroll = function() {
			if (window.scrollY >= nav_scroll_height) {
				self.nav_status = 'fixed';
			}
			else {
				self.nav_status = 'default';
			}
		}
	},
	methods:{
		changeTab(status) {
			this.tab_status = status;
		}
	}
}
</script>
<style scoped>
	.nav-top {
		height:44px;
		margin-bottom:16px;
	}
	.nav-top .nav-inner {
		position: relative;
		top:0;
		left:0;
		height:44px;
		width:100%;
		line-height:44px;
		background-color:#fff;
		border-bottom:1px solid #dcdcdc;
		text-align:center;
	}
	.nav-top .nav-inner.toFixed {
		position:fixed;
		top:44px;
		z-index:99;
	}
	.nav-top .nav-item {
		padding:0;
		font-size:0;
		letter-spacing: -3px;
	}
	.nav-top .nav-item li {
		display:inline-block;
		position:relative;
		font-size: 14px;
		letter-spacing: 0;
		color:#999;
		padding:0 15px;
	}
	.nav-top .nav-item li.cur {
		color:#333;
	}
	.nav-top .nav-item li.cur:after {
		position:absolute;
		bottom:5px;
		height:3px;
		width:34%;
		left:33%;
		content:'';
		background-color:#000;
	}
</style>


