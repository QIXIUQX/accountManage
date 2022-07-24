<template>
	<div class="login">
		<div class="login-wrapper">
			<p class="login-welcome">Welcome! </p>
			<p class="login-title">账号管理系统 <span class="tips">请记住账号密码 数据无价</span> </p>
			<div class="login-ipt">
				<el-input v-model="loginInfo.username" placeholder="请输入账号"></el-input>
				<el-input v-model="loginInfo.password" type="password" placeholder="请输入密码" class="login-password-ipt" ></el-input>
			</div>
			<div class="login-btn-wrapper">
				<button class="login-bt" @click="handleLoginBtnClick">登录</button>
				<button class="login-bt">注册</button>
			</div>
		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

/** 网络请求导入 导入 */

export default {
	name: "Login",
	data() {
		return {
			loginInfo: {
				username: "",
				password: ""
			}
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		handleLoginBtnClick() {
			console.log(this.loginInfo)
			this.$router.push("/home").catch(err => err)
		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.login {
	width: 100vw;
	height: 100vh;
	background: linear-gradient(to right bottom, #56d4e2, #4f91f1);

	.login-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 450px;

		.login-welcome {
			font-size: 40px;
			color: #b4daf1;
		}

		.login-title {
			color: #fffffe;
			font-size: 46px;
			.tips{
				font-size: 12px;
			}
		}

		.login-ipt {
			margin-top: 30px;
			.login-password-ipt{
				margin-top: 20px;
			}
		}
		.login-btn-wrapper{
			margin-top: 30px;
			display: flex;
			justify-content: center;
			.login-bt{
				margin-left:20px ;
				padding: 10px 40px;
				outline: none;
				background-color: #50a2ee;
				border: 1px solid #fff;
				border-radius: 6px;
				color: #fff;
				box-shadow: 0 0px 10px rgba(0, 0, 0, 0.15);
				cursor: pointer;
				transition: all 0.1s linear;
				&:hover {
					box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
					text-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
				}
			}
		}
	}
}
</style>
