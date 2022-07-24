<template>
	<div class="add-account">
		<div class="account-info role">
			<span class="account-info-txt">角色</span>
			<el-input v-model="addAccountInfo.role" placeholder="请输入内容"></el-input>
		</div>
		<div class="account-info account">
			<span class="account-info-txt">账号</span>
			<el-input v-model="addAccountInfo.username" placeholder="请输入内容"></el-input>
		</div>
		<div class="account-info password">
			<span class="account-info-txt">密码</span>
			<el-input v-model="addAccountInfo.password" placeholder="请输入内容"></el-input>
		</div>
		<div class="account-info server">
			<span class="account-info-txt">区服</span>
			<el-input v-model="addAccountInfo.server" placeholder="请输入内容"></el-input>
		</div>
		<div class="account-info remark">
			<span class="account-info-txt">备注</span>
			<el-input v-model="addAccountInfo.remark" placeholder="请输入内容"></el-input>
		</div>
		<div class="add-account-btn-wrapper">
			<el-button type="primary" @click="handleAddAccountBtnClick">添加信息</el-button>
		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

import {storageUtils} from "@/utils/common-utils";
import {v4 as uuidv4} from "uuid";

/** 网络请求导入 导入 */

export default {
	name: "AddAccount",
	data() {
		return {
			addAccountInfo: {
				role: "",
				username: "",
				password: "",
				server: "",
				remark: "",
				id: ""
			},
			historySaveAccountInfo: []
		}
	},
	created() {
		this.initAccountInfo()
	},
	methods: {
		initAccountInfo() {
			this.historySaveAccountInfo = storageUtils.getStorage("info") ? storageUtils.getStorage("info") : []
		},
		/** 事件或其他相关方法 **/
		handleAddAccountBtnClick() {
			this.$notify({
				title: '成功',
				message: '信息保存成功！',
				type: 'success',
				duration: 3000
			});
			this.addAccountInfo.id = uuidv4().replace(/-/g, "")
			this.historySaveAccountInfo = storageUtils.getStorage("info") ? storageUtils.getStorage("info") : []
			this.historySaveAccountInfo.push(this.addAccountInfo)
			storageUtils.saveStorage("info", this.historySaveAccountInfo)

			this.addAccountInfo.role = ""
			this.addAccountInfo.username = ""
			this.addAccountInfo.password = ""
			this.addAccountInfo.server = ""
			this.addAccountInfo.remark = ""
			this.$emit("addSuccess");
		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.add-account {
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

	.add-account-btn-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
}
</style>
