import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { setUserInfo } from '@/redux/actions/userInfo';
import { setCollapse } from '@/redux/actions/setting';
import { menus } from '@/router/menus';
import IconFont from '@/components/IconFont'

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideNenu extends Component {
	state = { menuSelected: this.props.history.location.pathname };

	handleFilter = permission => {
		const roleType = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).role.type;
		// 过滤没有权限的页面
		if (!permission || permission === roleType) {
			return true;
		}
		return false;
	};

	// 递归渲染菜单
	renderMenu = data => {
		return data.map(item => {
			if (item.children) {
				return (
					this.handleFilter(item.permission) && (
						<SubMenu
							key={item.path}
							title={
								<span>
									{item.icon ? <IconFont type={item.icon}/> : ''}
									<span>{item.title}</span>
								</span>
							}
						>
							{this.renderMenu(item.children)}
						</SubMenu>
					)
				);
			}
			return (
				this.handleFilter(item.permission) && (
					<Menu.Item key={item.path}>
						<Link to={item.path}>
							{item.icon ? <IconFont type={item.icon}/> : ''}
							<span>{item.title}</span>
						</Link>
					</Menu.Item>
				)
			);
		});
	};

	toggle = () => {
		this.props.setCollapse({ isCollapsed: !this.props.collapse.isCollapsed });
	};

	render() {
		// console.log(this.props);
		const menuSelected = this.props.history.location.pathname;
		const menuOpened = `/${menuSelected.split('/')[1]}`;
		const type = 'light';
		const { collapse } = this.props;
		return (
			<Sider trigger={null} collapsed={collapse.isCollapsed} collapsedWidth="50" theme={type} className="app-sider">
				<div className="logo">
				<IconFont  type={collapse.isCollapsed ? 'icon-caidanyou' : 'icon-caidanzuo'} onClick={this.toggle} />
				</div>
				<Menu style={{ height: '50px'}} theme={type} defaultOpenKeys={[menuOpened]} defaultSelectedKeys={[menuSelected]} selectedKeys={[menuSelected]} mode="inline">
					{this.renderMenu(menus)}
				</Menu>
			</Sider>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	setUserInfo: data => {
		dispatch(setUserInfo(data));
	},
	setCollapse: data => {
		dispatch(setCollapse(data));
	},
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SideNenu));
