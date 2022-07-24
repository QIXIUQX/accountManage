<template>
	<div class="" id="app">
		<router-view></router-view>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

import {storageUtils} from "@/utils/common-utils";

/** 网络请求导入 导入 */

export default {
	name: "App",
	created() {
		this.checkedRouter();
	},
	data() {
		return {
			settingsOpts: {}
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		checkedRouter() {
			this.settingsOpts = storageUtils.getStorage("settingsOpts") ? storageUtils.getStorage("settingsOpts") : {}
			if (this.settingsOpts && this.settingsOpts.login && this.settingsOpts.login.isLogin) {
				this.$router.push("/login").catch(err => err)
				return
			}
			this.$router.push("/home").catch(err => err)
		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>

</style>
