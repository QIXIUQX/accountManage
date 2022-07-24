<template>
	<div class="home">
		<SideBar></SideBar>
		<div class="primary">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>/** 组件/工具类/store 导入 */
import SideBar from "@/views/sideBar/SideBar";

/** 网络请求导入 导入 */

export default {
	name: "Home",
	components: {
		SideBar,
	},
	methods: {
		/** 事件或其他相关方法 **/
		name() {

		}
		/** 网络请求相关方法 **/
	},
}
</script>

<style lang="scss" scoped>
.home{
	display: flex;
	.primary{
		padding:20px 30px;
		flex: 1;
		background-color: #fff;
	}
}
</style>
