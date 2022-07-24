import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login/Login";
import Home from "@/views/home/Home";

import editor from "@/views/editor/Editor";
import settings from "@/views/settings/Settings";
import About from "@/views/about/About";
import Account from "@/views/account/Account";



Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/login",
	},
	{
		path: "/login",
		component: Login,
		meta: {
			title: "account-manage-login",
		},
	},
	{
		path: "/home",
		component: Home,
		meta: {
			title: "account-manage-home",
		},
		children: [
			{
				path: "/",
				redirect: "/home/account",
			},
			{
				path: "/home/account",
				component: Account,
				meta: {
					title: "",
				},
			},
			{
				path: "/home/editor",
				component: editor,
				meta: {
					title: "",
				},
			},
			{
				path: "/home/settings",
				component: settings,
				meta: {
					title: "",
				},
			},
			{
				path: "/home/about",
				component: About,
				meta: {
					title: "",
				},
			}
		],

	},

]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
