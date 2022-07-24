<template>
	<div class="sidebar">
		<ul class="sidebar-list">
			<li class="sidebar-item"
			    :class="{
				'active':activeIndex === i
			    }"
			    v-for="(item,i) in sidebarList" :key="item.id"
			    @click="handleNavItemCLicked(item,i)">
				{{ item.title }}
			</li>

		</ul>
	</div>
</template>

<script>
/** 组件/工具类/store 导入 */
import {commonUtils, dateUtils} from "@/utils/common-utils";

/** 网络请求导入 导入 */

export default {
	name: "SideBar",
	data() {
		return {
			sidebarList: [
				{
					path: "/home/account",
					title: "账号",
					id: dateUtils.getCurrentTimeStamp() * commonUtils.randomNum(1, 1000)
				},
				{
					path: "/home/editor",
					title: "编辑",
					id: dateUtils.getCurrentTimeStamp() * commonUtils.randomNum(1, 1000)
				},
				{
					path: "/home/settings",
					title: "设置",
					id: dateUtils.getCurrentTimeStamp() * commonUtils.randomNum(1, 1000)
				},
				{
					path: "/home/about",
					title: "关于",
					id: dateUtils.getCurrentTimeStamp() * commonUtils.randomNum(1, 1000)
				}
			],
			activeIndex: 0,
		}
	},
	methods: {
		/** 事件或其他相关方法 **/
		handleNavItemCLicked(item, i) {
			this.activeIndex = i
			this.$router.push(item.path).catch(err => err)
		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.sidebar {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	width: 150px;
	height: 100vh;
	background-color: #3498db;

	.sidebar-list {
		margin-top: 50px;

		.sidebar-item {
			padding: 10px 0;
			text-align: center;
			color: #ffffff;
			cursor: pointer;
			transition: all 0.2s linear;

			&:hover {
				background-color: #52a7e0;
			}
		}

		.active {
			background-color: #2981bd;
		}
	}
}
</style>
