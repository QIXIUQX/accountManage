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
					<div class="x-tab-list-item" v-for="(item,i) in showList " :key="i" v-show="showList.length">
						<div class="x-tab-list-item-content">{{ i + 1 }}</div>
						<div class="x-tab-list-item-content" @click="handleItemClick(item.role)">{{ item.role }}</div>
						<div class="x-tab-list-item-content" @click="handleItemClick(item.username)">{{ item.username }}</div>
						<div class="x-tab-list-item-content" @click="handleItemClick( item.password )">{{ item.password }}</div>
						<div class="x-tab-list-item-content" @click="handleItemClick(item.server)">{{ item.server }}</div>
						<div class="x-tab-list-item-content" @click="handleItemClick(item.remark)">{{ item.remark }}</div>
					</div>
					<div v-show="showList.length=== 0">暂无数据</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */

import {commonUtils, storageUtils} from "@/utils/common-utils";

/** 网络请求导入 导入 */

export default {
	name: "Account",
	data() {
		return {
			searchOpts: {
				keyword: ""
			},
			allAccountList: [],
			showList: []
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		handleItemClick(content) {
			commonUtils.copyShane(content,()=>{
				this.$notify({
					title: '成功',
					message: '复制成功！',
					type: 'success',
					duration: 3000
				});
			})
		}
		/** 网络请求相关方法 **/
	},
	created() {
		Object.assign(this.allAccountList, storageUtils.getStorage("info"));
		this.showList = this.allAccountList
	},
	watch: {
		'searchOpts.keyword': {
			handler() {
				if (this.searchOpts.keyword === "") {
					this.showList = this.allAccountList
					return
				}
				let list = []
				this.allAccountList.forEach((item, i) => {
					console.log(item)
					if (item.role.indexOf(this.searchOpts.keyword) !== -1) {
						list.push(item)
					}
					if (item.remark.indexOf(this.searchOpts.keyword) !== -1) {
						list.push(item)
					}
					if (item.server.indexOf(this.searchOpts.keyword) !== -1) {
						list.push(item)
					}
					if (item.username.indexOf(this.searchOpts.keyword) !== -1) {
						list.push(item)
					}
				})
				list = commonUtils.uniqueByObject(list, "id")
				this.showList = list
			}
		},

	}
}
</script>

<style lang="scss" scoped>
.account {
	display: flex;
	flex-direction: column;
	position: relative;

	.search-wrap {
		padding: 20px 30px 0 180px;
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
		.x-tab-list-item-content{
			padding: 5px 2px!important;
			cursor: pointer;
			&:hover{
				color: #3a8ee6;
			}
		}
	}
}
</style>
