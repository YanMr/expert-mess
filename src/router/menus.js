/**
 * @ Description:权限控制，permission 1==超级管理员，其它为普通用户
 */

export const menus = [
	{
		path: '/dashboard',
		title: '首页',
		icon: 'icon-zhuye'
	},
	{
		path: '/personal',
		title: '个人档案',
		icon: 'icon-record-full',
		children: [
			{
				path: '/personal/information',
				title: '基本信息',
			},
			{
				path: '/personal/expandInformation',
				title: '扩展信息',
			},
			{
				path: '/personal/record',
				title: '变更记录',
			},
			{
				path: '/personal/apply',
				title: '续聘申请',
			},
			{
				path: '/personal/assessment',
				title: '考核记录',
			},
			{
				path: '/personal/integral',
				title: '积分记录',
			}
		]
	},
	{
		path: '/expert',
		title: '专家库管理',
		icon: 'icon-zhuanjia',
		children: [
			{
				path: '/expert/archivesInformation',
				title: '审核信息',
			},
			{
				path: '/expert/maintain',
				title: '专家信息维护',
			}
		]
	},
	{
		path: '/recruit',
		title: '专家续聘管理',
		icon: 'icon-zhaopinshenqing',
		children: [
			{
				path: '/recruit/recruit',
				title: '续聘资格配置',
			},
			{
				path: '/recruit/examine',
				title: '续聘信息审核'
			}
		]
	},
	{
		path: '/examination',
		title: '在线考试',
		icon: 'icon-kaoshi',
		children: [
			{
				path: '/examination/archives',
				title: '试卷配置',
			},
			{
				path: '/examination/bank',
				title: '题库管理'
			},
			{
				path: '/examination/paper',
				title: '阅卷管理'
			},
			{
				path: '/examination/result',
				title: '考试结果'
			}
		]
	},
	{
		path: '/train',
		title: '在线培训',
		icon: 'icon-peixun',
		children: [
			{
				path: '/train/data',
				title: '培训资料',
			},
			{
				path: '/train/batch',
				title: '培训批次'
			},
			{
				path: '/train/study',
				title: '培训学习'
			},
			{
				path: '/train/result',
				title: '培训结果'
			}
		]
	},
	{
		path: '/system',
		title: '系统管理',
		icon: 'icon-xitong',
		children: [
			{
				path: '/system/account',
				title: '账号管理',
			},
			{
				path: '/system/department',
				title: '部门管理'
			},
			{
				path: '/system/group',
				title: '用户组管理'
			},
			{
				path: '/system/jurisdiction',
				title: '权限管理'
			},
			{
				path: '/system/batch',
				title: '考核批次'
			},
			{
				path: '/system/pointRule',
				title: '积分管理'
			}
		]
	},
	{
		path: '/permission',
		title: '权限',
		icon: 'icon-zhaopinshenqing',
		children: [
			{
				path: '/permission/toggle',
				title: '权限切换',
				permission: 1
			},
			{
				path: '/permission/intercept',
				title: '权限看看'
			}
		]
	},
];
