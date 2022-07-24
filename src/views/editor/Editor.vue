<template>
	<div class="editor">
		<div class="editor-wrap">
			<div class=" editor-item add-info">
				<el-divider content-position="left">添加账号</el-divider>
				<AddAccount @addSuccess="handleAddAccountSuccess"></AddAccount>
			</div>
			<div class="editor-item update-info">
				<el-divider content-position="left">编辑账号</el-divider>
				<EditAccount :editorOpts="editorOpts" @editAccountInfoSuccess="editAccountInfoSuccess"></EditAccount>
			</div>
		</div>
		<div class="editor-item delete-wrap ">
			<el-divider content-position="left">删除账号</el-divider>
			<div class="x-tab-list" v-show="historySaveAccountInfolist.length" ref="xTableEl">
				<div class="x-tab-header-wrap">
					<div class="x-tab-header-item table-index">序号</div>
					<div class="x-tab-header-item">角色</div>
					<div class="x-tab-header-item">账号</div>
					<div class="x-tab-header-item">密码</div>
					<div class="x-tab-header-item">服务器</div>
					<div class="x-tab-header-item">备注</div>
					<div class="x-tab-header-item">操作</div>
				</div>
				<div class="x-tab-list-wrap">
					<div class="x-tab-list-item" v-for="(item,i) in historySaveAccountInfolist" :key="i">
						<div class="x-tab-list-item-content table-index">{{ i + 1 }}</div>
						<div class="x-tab-list-item-content">{{ item.role }}</div>
						<div class="x-tab-list-item-content">{{ item.username }}</div>
						<div class="x-tab-list-item-content">{{ item.password }}</div>
						<div class="x-tab-list-item-content">{{ item.server }}</div>
						<div class="x-tab-list-item-content">{{ item.remark }}</div>
						<div class="x-tab-list-item-content">
							<el-button type="primary" size="mini" @click="handleEditBtnClick(item)" class="common-btn">
								编辑
							</el-button>
							<el-button type="danger" size="mini" @click="handleDeleteBtnClick(i)" class="common-btn">
								删除
							</el-button>
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
import { domUtils, storageUtils} from "@/utils/common-utils";


/** 网络请求导入 导入 */

export default {
	name: "Editor",
	data() {
		return {
			historySaveAccountInfolist: storageUtils.getStorage("info") ? storageUtils.getStorage("info") : [],
			editorOpts: {
				target: {},
				disable: true,
				scrollTop: 0
			}
		}
	},
	components: {
		AddAccount, EditAccount
	},
	watch: {
		historySaveAccountInfolist(newValue) {
			console.log(newValue)
		}
	},
	mounted() {
	},
	methods: {
		/** 事件或其他相关方法 **/

		/**
		 * 添加账号
		 */
		handleAddAccountSuccess() {
			this.historySaveAccountInfolist = storageUtils.getStorage("info")
		},

		/**
		 * 编辑账号成功
		 */
		editAccountInfoSuccess() {
			window.scrollTo(0, this.editorOpts.scrollTop)
			this.historySaveAccountInfolist = storageUtils.getStorage("info")
			this.editorOpts.disable = true;
		},
		/**
		 * 编辑按钮被点击
		 * @param item
		 */
		handleEditBtnClick(item) {
			this.editorOpts.scrollTop = document.documentElement.scrollTop
			domUtils.backTop()
			this.editorOpts.target = item
			this.editorOpts.disable = false
		},
		/**
		 * 删除按钮被点击
		 * @param i 删除的编号
		 */
		handleDeleteBtnClick(i) {
			this.historySaveAccountInfolist.splice(i, 1)
			storageUtils.saveStorage("info", this.historySaveAccountInfolist)
			this.$notify({
				title: '成功',
				message: '信息删除成功！',
				type: 'success',
				duration: 3000
			});
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
		height: 376px;
		margin-top: 40px;
		padding: 10px;

		/**
		表格相关设置
		 */
		.x-tab-list {
			overflow: hidden;
			border: 1px solid #ccc;
			//表头
			.x-tab-header-wrap {
				display: flex;
				padding: 12px 0;
				width: 100%;
				background-color: #fafafa;
				color: #808080;
				font-size: 0.16rem;
				border-bottom: #e5e5e5 solid .02rem;

				//表头的每一个项
				.x-tab-header-item {
					flex: 10;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			//表格内容列表
			.x-tab-list-wrap {
				flex: 1;
				border-top: none;
				overflow: hidden;
				height: 260px;
				overflow-y: scroll;

				//表格中的每一行
				.x-tab-list-item {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 5px 0;
					//height: 0.4rem;

					&:nth-child(1) {
						border-top: none;
					}

					//单数设置背景颜色
					&:nth-child(even) {
						background-color: rgba(180, 218, 241, 0.1);
					}

					&:hover {
						background-color: rgba(180, 218, 241, 0.8);
					}


					//每一行中的每一个项
					.x-tab-list-item-content {
						flex: 10;
						padding: 0 10px;
						text-align: center;
						//line-height: 0.4rem;

						word-break: break-all;
						overflow: hidden;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;


						&:nth-child(1) {
							border-left: none;
						}
					}

				}
			}

			.table-index {
				flex: 5 !important;
			}
		}

	}


	.common-btn {
		margin: 2px 0 0 10px;
	}


}
</style>
