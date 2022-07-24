//创建菜单
const {Menu} = require('electron');
//订单菜单
// let template = [
// 	{
// 		label: '菜单1',
// 		submenu: [
// 			{
// 				label: '新建',
// 				accelerator: 'ctrl+n',
// 				click() {
// 					console.log('ctrl+n');
// 				}
// 			},
// 			{
// 				label: '测试',
// 				click() {
// 					console.log('new window');
// 				}
// 			}
// 		]
// 	}
// ]
// let m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(null);
