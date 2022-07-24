<template>
	<div class="settings">
		<div class="settings-login">
			<el-divider content-position="left">设置登录</el-divider>
			<div class="settings-login-wrap">
				<div class="settings-login-wrap-item">
					<el-switch v-model="settingsOpts.login.isLogin" active-text="启动后需要登录"></el-switch>
					<div v-show="settingsOpts.login.isLogin" class="settings-login-ipt">
						<el-input v-model="settingsOpts.login.username" placeholder="请输入登录账号"
						          class="settings-login-ipt-item"></el-input>
						<el-input v-model="settingsOpts.login.password" placeholder="请输入登录密码"
						          class="settings-login-ipt-item"></el-input>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

import {storageUtils} from "@/utils/common-utils";

/** 网络请求导入 导入 */

export default {
	name: "Settings",
	data() {
		return {
			settingsOpts: {
				login: {
					isLogin: false,// 默认是否需要登录
					username: "",// 默认是否需要登录
					password: "",// 默认是否需要登录
				}
			}
		}
	},
	watch: {
		"settingsOpts.login.isLogin"() {
			storageUtils.saveStorage("settingsOpts", this.settingsOpts)
		},
		"settingsOpts.login.username"() {
			storageUtils.saveStorage("settingsOpts", this.settingsOpts)
		},
		"settingsOpts.login.password"() {
			storageUtils.saveStorage("settingsOpts", this.settingsOpts)
		}
	},
	created() {
		this.getSettingsOpts();
	},
	methods: {
		/** 事件或其他相关方法 **/
		getSettingsOpts() {
			Object.assign(this.settingsOpts, storageUtils.getStorage("settingsOpts"));
		}
		/** 网络请求相关方法 **/
	}
}
</script>

<style lang="scss" scoped>
.settings {
	padding: 20px;
	border-radius: 6px;
	border: 1px solid #ddd;

	.settings-login {
		.settings-login-wrap {
			padding: 6px 0;

			.settings-login-wrap-item {
				.settings-login-ipt {
					display: flex;

					.settings-login-ipt-item {
						margin: 5px 0 0 10px;
						width: 300px;
					}
				}
			}
		}
	}
}

</style>
