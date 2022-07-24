<template>
	<div class="account">
		<div class="search-wrap">
			<div class="search">
				<el-divider content-position="left">搜索</el-divider>
				<el-input v-model="searchOpts.keyword" placeholder="请输入内容"></el-input>
			</div>
		</div>
		<div class="account-wrapper">
			<el-divider content-position="left">账号信息</el-divider>
			<div class="x-tab-list">
				<div class="x-tab-header-wrap">
					<div class="x-tab-header-item">序号</div>
					<div class="x-tab-header-item">角色</div>
					<div class="x-tab-header-item">账号</div>
					<div class="x-tab-header-item">密码</div>
					<div class="x-tab-header-item">服务器</div>
					<div class="x-tab-header-item">备注</div>
				</div>
				<div class="x-tab-list-wrap">
					<div class="x-tab-list-item" v-for="(item,i) in list " :key="i">
						<div class="x-tab-list-item-content">{{ i + 1 }}</div>
						<div class="x-tab-list-item-content">{{ item.role }}</div>
						<div class="x-tab-list-item-content">{{ item.username }}</div>
						<div class="x-tab-list-item-content">{{ item.password }}</div>
						<div class="x-tab-list-item-content">{{ item.server }}</div>
						<div class="x-tab-list-item-content">{{ item.remark }}</div>

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
	name: "Account",
	data() {
		return {
			searchOpts: {
				keyword: ""
			},
			list: []
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		name() {

		}
		/** 网络请求相关方法 **/
	},
	created() {
		Object.assign(this.list, storageUtils.getStorage("info"));
	},
}
</script>

<style lang="scss" scoped>
.account {
	display: flex;
	flex-direction: column;
	position: relative;

	.search-wrap {
		padding: 20px 30px 0 180px ;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;

		.search {
			padding: 5px;
			border: 1px solid #ddd;
		}
	}

	.account-wrapper {
		margin-top: 120px;
		flex: 1;
		border: 1px solid #ddd;
	}
}
</style>
