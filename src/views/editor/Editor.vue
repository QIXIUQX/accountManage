<template>
	<div class="editor">
		<div class="editor-wrap">
			<div class=" editor-item add-info">
				<el-divider content-position="left">添加账号</el-divider>
				<AddAccount @addSuccess="handleAddAccountSuccess"></AddAccount>
			</div>
			<div class="editor-item update-info">
				<el-divider content-position="left">编辑账号</el-divider>
				<EditAccount :editorOpts="editorOpts" @editAccountInfo="handleEditAccountInfo"></EditAccount>
			</div>
		</div>
		<div class="editor-item delete-wrap ">
			<el-divider content-position="left">删除账号</el-divider>
			<div class="x-table" v-show="historySaveAccountInfolist.length">
				<div class="x-table-header">
					<div class="x-table-column">序号</div>
					<div class="x-table-column">角色</div>
					<div class="x-table-column">账号</div>
					<div class="x-table-column">密码</div>
					<div class="x-table-column">服务器</div>
					<div class="x-table-column">备注</div>
					<div class="x-table-column">操作</div>
				</div>
				<div class="x-table-body">
					<div class="x-table-row" v-for="(item,i) in historySaveAccountInfolist" :key="i">
						<div class="x-table-column">{{ i + 1 }}</div>
						<div class="x-table-column">{{ item.role }}</div>
						<div class="x-table-column">{{ item.username }}</div>
						<div class="x-table-column">{{ item.password }}</div>
						<div class="x-table-column">{{ item.server }}</div>
						<div class="x-table-column">{{ item.remark }}</div>
						<div class="x-table-column">
							<el-button type="primary" size="mini" @click="handleEditBtnClick(item)">编辑</el-button>
							<el-button type="danger" size="mini" @click="handleDeleteBtnClick(i)">删除</el-button>
						</div>
					</div>
				</div>
			</div>
			<div v-show="!historySaveAccountInfolist.length">暂无数据</div>
		</div>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */
import AddAccount from "./addAccount/AddAccount";
import EditAccount from "./editAccount/EditAccount";
import {commonUtils, storageUtils} from "@/utils/common-utils";


/** 网络请求导入 导入 */

export default {
	name: "Editor",
	data() {
		return {
			historySaveAccountInfolist: storageUtils.getStorage("info") ? storageUtils.getStorage("info") : [],
			editorOpts: {}
		}
	},
	components: {
		AddAccount, EditAccount
	},
	created() {
	},
	methods: {
		/** 事件或其他相关方法 **/

		handleAddAccountSuccess() {
			this.historySaveAccountInfolist = storageUtils.getStorage("info")
			console.log(this.historySaveAccountInfolist)
		},
		handleEditAccountInfo(){
			console.log(1231231231)
			this.historySaveAccountInfolist = storageUtils.getStorage("info")
		},
		/**
		 * 编辑按钮被点击
		 * @param item
		 */
		handleEditBtnClick(item) {
			this.editorOpts = item
			console.log(this.editorOpts)
		},
		/**
		 * 删除按钮被点击
		 * @param i 删除的编号
		 */
		handleDeleteBtnClick(i) {
			this.historySaveAccountInfolist.splice(i, 1)
			storageUtils.saveStorage("info", this.historySaveAccountInfolist)
		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.editor {
	display: flex;
	flex-direction: column;

	.editor-item {
		border-radius: 4px;
		border: 1px solid #b4daf1;
		padding: 20px 20px;
		flex: 1;
	}

	.editor-wrap {

		display: flex;

		.add-info {
		}

		.update-info {
			margin-left: 40px;
		}
	}

	.delete-wrap {
		flex: 1;
		margin-top: 20px;
		padding: 10px;

		.x-table {
			border: 1px solid #ccc;
			overflow-y: auto;

			.x-table-column {
				flex: 20;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 5px 10px;
				white-space: nowrap;

			}

			.x-table-header {
				display: flex;
				text-align: center;
				border-bottom: 1px solid #ccc;

				.x-table-column {
					padding: 10px;
				}

			}

			.x-table-body {
				.x-table-row {
					display: flex;
					text-align: center;
					cursor: pointer;

					&:hover {
						background-color: rgba(180, 218, 241, 0.8);
					}

					&:nth-child(even) {
						background-color: rgba(180, 218, 241, 0.1);
					}
				}

			}
		}
	}


}
</style>
