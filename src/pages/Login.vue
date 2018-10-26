<template>
	<div class="lite-page-wrap">
		<div class="main-top">
			<component-simp-header></component-simp-header>
		</div>
		<div class="verify-box">
			<p class="v-b-title">登录注册更精彩</p>
			<p class="v-b-info">登录注册表示同意<a>用户协议</a>`<a>隐私条款</a></p>
			<form action="">
				<div class="input-box">
					<div class="select-num">
						<span class="text-cut">+86</span>
						<select class="box-select" v-model="phone_type">
							<option value="+86">中国</option>
							<option value="+023">美国</option>
						</select>
						<span class="ico-arrow">下</span>
					</div>
					<input type="text" @input="inputPhone" v-model="phone" class="box-input" placeholder="请输入手机号">
					<span class="ico-close" @click="inputClose"></span>
				</div>
			</form>
			<div class="v-b-tip">
				<span></span>
			</div>
			<a class="box-btn v-b-submit" :class="{disabled:!phone.length}">获取验证码</a>
			<div class="box-center">
				<a class="link" @click="$router.push('/pass_login')">账号密码登录</a>
			</div>
			<div class="box-bottom">
				<p class="bottom-title">
					<span>其他登录方式</span>
				</p>
				<div class="bottom-icon">
					<div class="item">
						<span>qq</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'Login',
	data() {
		return {
			phone_type:'+86',
			phone:'',
			phone_record:'',
			phone_trim:''
		}
	},
	methods: {
		inputPhone() {
			var temp_arr = '';
			// 不符合输入规范. 值还原
			if (!/^[0-9 ]*$/.test(this.phone) || this.phone.length > 13) {
				this.phone = this.phone_record;
				return false;
			}
			else {
				// 删到空格一次删俩
				if (this.phone[this.phone.length-1] === ' ') {
					temp_arr = this.phone.split('');
					temp_arr.splice(temp_arr.length - 1, 1);
					this.phone = temp_arr.join('');
				}
				// 输入, 超过四个就判断第四位是否为空, 否则注入空格
				else if (this.phone.length === 4 || this.phone.length === 8) {
					temp_arr = this.phone.split('');
					if (this.phone.charAt(3) !== ' ') {
						temp_arr.splice(3, 0, ' ');
					}
					if (this.phone.length === 8 && this.phone.charAt(8) !== ' ') {
						temp_arr.splice(8, 0, ' ');
					}
					this.phone = temp_arr.join('');
				}
				// 记录值, 记录去空格值
				this.phone_record = this.phone;
				this.phone_trim = this.phone.replace(/\s+/g, "");
			}
		},
		inputClose() {
			this.phone = this.phone_record = this.phone_trim = '';
		}
	}
}
</script>
<style scoped>
	.lite-page-wrap {
		background-color:#fff;
	}
	.lite-page-wrap .verify-box {
		padding:0 24px;
	}
	.verify-box .v-b-title {
		padding:15px 0;
		font-size:30px;
		font-weight:normal;
		color:#000;
		margin:0;
	}
	.verify-box .v-b-info {
		margin:0;
		font-size:15px;
		color:#666;
	}
	.verify-box .v-b-info a {
		color:#507DAF;
	}
	.verify-box .input-box {
		position:relative;
		margin-top:60px;
		border-bottom:1px solid #dcdcdc;
		height:45px;
		display:flex;
		flex-flow:row nowrap;
		justify-content: flex-start;
		align-items:center;
	}
	.input-box .select-num {
		position:relative;
	}
	.input-box .select-num .text-cut {
		position:absolute;
		left:0;
		top:11px;
		height:20px;
		line-height:20px;
		font-size:16px;
	}
	.input-box .select-num .box-select {
		position:relative;
		z-index:2;
		opacity: 0;
		height:44px;
		border:none;padding:0;
	}
	.input-box .select-num .ico-arrow {
		position:absolute;
		right:0px;
		top:11px;
		height:20px;
		line-height:20px;
		font-size:12px;
		color:#999;
	}
	.input-box .box-input {
		width:156px;
		border:none;
		height:34px;
		margin-left:10px;
		font-size:20px;
	}
	.input-box .box-input:focus {
		outline:0;
	}
	.input-box input::-webkit-input-placeholder {
		color: #bdbdbd;
		font-size: 16px;
	}
	.input-box .ico-close {
		position:absolute;
		top:14px;
		right:5px;
		width:16px;
		height:16px;
		border-radius:50%;
		display:block;
		background-color:#aaa;
		overflow:hidden;
	}
	.input-box .ico-close:after,
	.input-box .ico-close:before {
		content:'';
		border-bottom:1px solid #fff;
		width:80%;
		display:inline-block;
		position:absolute;
		top:50%;
		left:10%;
	}
	.input-box .ico-close:before {
		transform:rotate(-45deg);
	}
	.input-box .ico-close:after {
		transform:rotate(45deg);
	}
	.v-b-tip {
		padding-top:7px;
		height:20px;
		line-height:20px;
		font-size:16px;
		color:#333;
	}
	.v-b-submit {
		display:block;
		width:100%;
		height:40px;
		line-height:40px;
		text-align:center;
		border-radius:20px;
		margin-top:35px;
		background-color:#1b9af4;
		color:#fff;
	}
	.v-b-submit.disabled {
		opacity:.6;
	}
	.box-center {
		margin-top:15px;
		height:20px;
		line-height:20px;
		font-size:14px;
	}
	.box-center a {
		color:#507DAF;
	}
	.box-bottom {
		margin-top:92px;
	}
	.box-bottom .bottom-title {
		position:relative;
		height:20px;
		line-height:20px;
		text-align:center;
		margin:0;
	}
	.box-bottom .bottom-title:before {
		position: absolute;
		top:10px;
		border-bottom:1px solid #dcdcdc;
		left:0;
		display:block;
		content:'';
		width:100%;
		z-index:1;
	}
	.box-bottom .bottom-title span {
		position: relative;
		display:inline-block;
		text-align:center;
		z-index:2;
		background-color:#fff;
		padding:0 5px;
		font-size:14px;
	}
	.box-bottom .bottom-icon {
		padding-top:15px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align:center;
	}
	.box-bottom .bottom-icon .item {
		width:50px;
		text-align:center;
		color:#999;
	}
	.box-bottom .bottom-icon .item span:before {
		content:'';
		display:inline-block;
		width:100%;
		height:0;
		padding-top:100%;
		border-radius:50%;
		background-color:#000;
	}
</style>

