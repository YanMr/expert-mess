/**
 * @ Description:权限控制，permission 1==超级管理员，其它为普通用户
 */


import Dashboard from '../views/dashboard/Index'; // 首页
import PInformation from '../views/personal/Information'; // 基本信息
import ExpandInformation from '../views/personal/ExpandInformation'; // 扩展信息
import PRecord from '../views/personal/Record'; // 变更记录
import PApply from '../views/personal/Apply'; // 续聘申请
import PAssessment from '../views/personal/Assessment'; // 考核记录
import IIndex from '../views/integral/Index'; // 积分记录
import EInformation from '../views/expert/ArchivesInformation'; // 专家信息变更审核
import EMaintain from '../views/expert/Maintain'; // 专家信息维护
import RRecruit from '../views/recruit/Recruit'; // 续聘资格配置
import RExamine from '../views/recruit/Examine'; // 续聘信息审核
import ExArchives from '../views/examination/Archives'; // 专家动态积分规则
import EBank from '../views/examination/Bank'; // 题库管理
import EPaper from '../views/examination/Paper'; // 阅卷管理
import EResult from '../views/examination/Result'; // 考试结果
import TData from '../views/train/Data'; // 培训资料
import TBatch from '../views/train/Batch'; // 培训批次
import TStudy from '../views/train/Study'; // 培训学习
import TResult from '../views/train/Result'; // 培训结果
import SAccount from '../views/system/Account'; // 账号管理
import SDepartment from '../views/system/Department'; // 部门管理
import SGroup from '../views/system/Group'; // 用户组管理
import SJurisdiction from '../views/system/Jurisdiction'; // 权限管理
import EBatch from '../views/system/Batch'; // 考核批次
import SPointRule from '../views/system/PointRule.js'; // 积分管理


import Error404 from '../views/error/Error404'; // 404
import Error500 from '../views/error/Error500'; // 500
import Intercept from '../views/permission/Intercept'; // 路由拦截
import Toggle from '../views/permission/Toggle'; // 权限切换






export const routes = [
	{ path: '/dashboard', component: Dashboard },
	{ path: '/personal/information', component: PInformation },
	{ path: '/personal/expandInformation', component: ExpandInformation },
	{ path: '/personal/record', component: PRecord },
	{ path: '/personal/apply', component: PApply },
	{ path: '/personal/assessment', component: PAssessment },
	{ path: '/personal/integral', component: IIndex },
	{ path: '/expert/archivesInformation', component: EInformation },
	{ path: '/expert/maintain', component: EMaintain },
	{ path: '/recruit/recruit', component: RRecruit },
	{ path: '/recruit/examine', component: RExamine },
	{ path: '/examination/archives', component: ExArchives },
	{ path: '/examination/bank', component: EBank },
	{ path: '/examination/paper', component: EPaper },
	{ path: '/examination/result', component: EResult },
	{ path: '/train/data', component: TData },
	{ path: '/train/batch', component: TBatch },
	{ path: '/train/study', component: TStudy },
	{ path: '/train/result', component: TResult },
	{ path: '/system/account', component: SAccount },
	{ path: '/system/department', component: SDepartment },
	{ path: '/system/group', component: SGroup },
	{ path: '/system/jurisdiction', component: SJurisdiction },
	{ path: '/system/batch', component: EBatch },
	{ path: '/system/pointRule', component: SPointRule },

	{ path: '/permission/toggle', component: Toggle, permission:1 },
	{ path: '/permission/intercept', component: Intercept },
	{ path: '/error/404', component: Error404 },
	{ path: '/error/500', component: Error500 },
];
