<template>
	<div class="nav-main">
		<div class="m-box">
			<div class="m-box-inner">
				<ul class="list">
					<li :class="{cur:tag_select === index}" :key="index" v-for="(item, index) in tags" v-on:click="changeTag(index)">
						<span :id="index">{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="nav-plus m-box-center m-box-center-a" v-on:click="navPlus" :class="{plus:nav_show}">
				<i class="font-arrow-down">下</i>
			</div>
		</div>
		<div class="s-box">
			<ul class="list" :class="{active:nav_show}">
				<li :class="{cur:tag_select === index}" :key="index" v-for="(item, index) in tags" v-on:click="changeTag(index)">
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "Nav-tags",
	props: {
		tags:{
			type:Array,
			defaultValue:[],
		}
	},
	data:function() {
		return {
			nav_show:false,
			tag_select:0,
		}
	},
	methods: {
		navPlus() {
			this.nav_show = this.nav_show ? false : true;
		},
		changeTag(index) {
			this.tag_select = index;
		}
	}
}
</script>
<style scoped>
.nav-main {
	height:44px;
}
.nav-main .m-box {
	display:flex;
	flex-flow:row nowrap;
	justify-content: space-between;
	align-items:center;
	border-bottom:1px solid #dcdcdc;
}
.nav-main .m-box .m-box-inner {
	position:relative;
	width:90%;
	flex:0 1 auto;
}
.nav-main .m-box .m-box-inner:after,
.nav-main .m-box .m-box-inner:before {
	position:absolute;
	top:0;
	display:inline-block;
	content:'';
	width:12px;
	height:44px;
	z-index:2;
}
.nav-main .m-box .m-box-inner:after {
	background: linear-gradient(270deg,#fafafa,#fafafa 50%,hsla(0,0%,98%,0));
	right:0;
}
.nav-main .m-box .m-box-inner:before {
	left:0;
	background: linear-gradient(90deg,#fafafa,#fafafa 50%,hsla(0,0%,98%,0));
}
.m-box .list {
	line-height:44px;
	margin:0;
	padding:0;
	width:100%;
	font-size:0;
	letter-spacing: -3px;
	white-space:nowrap;
	overflow-x:scroll;
	text-align:left;
}
.m-box .list::-webkit-scrollbar {
	display: none;
}
.m-box .list > li {
	vertical-align: top;
	position:relative;
	font-size:16px;
	letter-spacing: 0px;
	display:inline-block;
	margin:0 12px;
	padding:0;
	color:#999;
}
.m-box .list > li.cur {
	color:#000;
}
.m-box .list > li.cur:after {
	position:absolute;
	content:'';
	width:10px;
	left:50%;
	margin:-5px;
	height:2px;
	bottom:10px;
	background-color:#333;
}
.s-box .list {
	position:absolute;
	top:88px;
	left:0;
	width:100%;
	padding:10px;
	margin:0;
	display:flex;
	flex-flow:row wrap;
	justify-content: space-between;
	align-items:center;
	background-color:#fafafa;
	padding-top: 0;
	transition: all .25s ease;
	visibility: hidden;
	opacity: 0;
}
.s-box .list.active {
	visibility: visible;
	opacity: 1;
}
.s-box .list li {
	display:inline-block;
	padding:0 15px;
	line-height:24px;
	background-color:#ddd;
	color:#fff;
	border-radius:3px;
	margin:5px 0;
	min-width:22%;
}
.s-box .list li.cur {
	background-color:red;
}
.nav-plus {
	width:10%;
	height:44px;
	text-align:center;
	line-height:44px;
	margin-right:12px;
	flex:0 0 10%;
	transition:transform .25s ease;
}
.plus {
	transform:rotate(180deg);
}
.nav-plus i {
	font-size:14px;
	font-style:normal;
}
</style>

