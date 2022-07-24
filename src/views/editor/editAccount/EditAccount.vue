<template>
	<div class="edit-accountInfo">
		<div class="account-info role">
			<span class="account-info-txt">角色</span>
			<el-input v-model="editAccountInfo.role" :placeholder="editorOpts.role"></el-input>
		</div>
		<div class="account-info account">
			<span class="account-info-txt">账号</span>
			<el-input v-model="editAccountInfo.username" :placeholder="editorOpts.username"></el-input>
		</div>
		<div class="account-info password">
			<span class="account-info-txt">密码</span>
			<el-input v-model="editAccountInfo.password" :placeholder="editorOpts.password"></el-input>
		</div>
		<div class="account-info server">
			<span class="account-info-txt">区服</span>
			<el-input v-model="editAccountInfo.server" :placeholder="editorOpts.server"></el-input>
		</div>
		<div class="account-info remark">
			<span class="account-info-txt">备注</span>
			<el-input v-model="editAccountInfo.remark" :placeholder="editorOpts.remark"></el-input>
		</div>
		<div class="edit-accountInfo-btn-wrapper">
			<el-button type="primary" @click="handleEditAccountBtnClick">修改信息</el-button>
		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

import {commonUtils, storageUtils} from "@/utils/common-utils";

/** 网络请求导入 导入 */

export default {
	name: "EditAccount",
	props: {
		editorOpts: {
			type: Object,
			default() {
				return {}
			}
		},
	},
	data() {
		return {
			editAccountInfo: {
				role: "",
				username: "",
				password: "",
				server: "",
				remark: "",
			},
			historySaveAccountInfo: []
		}
	},
	created() {
	},
	methods: {

		/** 事件或其他相关方法 **/
		handleEditAccountBtnClick() {

			this.historySaveAccountInfo = storageUtils.getStorage("info")
			this.editAccountInfo.id = this.editorOpts.id
			this.editAccountInfo = {...this.editorOpts, ...this.editAccountInfo};
			this.historySaveAccountInfo.unshift(this.editAccountInfo)
			storageUtils.saveStorage("info", commonUtils.uniqueByObject(this.historySaveAccountInfo, "id"))
			this.historySaveAccountInfo = storageUtils.getStorage("info")

			this.editAccountInfo.role = ""
			this.editAccountInfo.username = ""
			this.editAccountInfo.password = ""
			this.editAccountInfo.server = ""
			this.editAccountInfo.remark = ""

			this.$emit("editAccountInfo");
		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.edit-accountInfo {
	.account-info {
		padding: 10px 20px;
		display: flex;
		justify-content: center;
		align-items: center;

		.account-info-txt {
			white-space: nowrap;
			margin-right: 10px;

		}
	}

	.edit-accountInfo-btn-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
}
</style>
