import React, { Component } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, CaretDownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserInfo } from '@/redux/actions/userInfo';
import logo from "@/assets/img/logo.png"

class TopHeader extends Component {
	state = { visible: false };
	handleLogout = () => {
		this.props.setUserInfo({});
		localStorage.removeItem('isLogin');
		localStorage.removeItem('userInfo');
		this.props.history.push('/');
	};
	componentDidMount() {
		let userInfo = localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo'));
		if (userInfo) {
			this.props.setUserInfo(userInfo);
		} else {
			this.props.setUserInfo({});
			this.props.history.push('/login');
		}
	}

	render() {
		const DropdownList = (
			<Menu className="drop-list">
				<Menu.Item key="user">
				  <UserOutlined />
					{Object.keys(this.props.userInfo).length > 0 && this.props.userInfo.role.name}
				</Menu.Item>
				<Menu.Item key="logout" onClick={this.handleLogout}>
				<LogoutOutlined />
					退出登录
				</Menu.Item>
			</Menu>
		);
		return (
			<div className="top-header">
				<div className="top-header-inner">
					<div className="header-title">
						<div className="loginImg"><img alt="logo" src={logo}></img></div>
						<div className="loginTitle">专家信息库管理系统</div>
					</div>
					<div className="header-right">
						{/* <div className="schoolName">{localStorage.getItem('serverName') || ''}</div> */}
						<div className="dropdown-wrap" id="dropdown-wrap" style={{ cursor: 'pointer' }}>
							<Dropdown getPopupContainer={() => document.getElementById('dropdown-wrap')} overlay={DropdownList}>
								<div className="userList">
								<Avatar shape="square" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADwElEQVRYR7WXTWwTVxDH/7Pe9Qf+ahyaOAmBUKeBAyqXSlUrUM/0A6lHxAWE1PbSG+IIoceKG5e2EqKXimMlWtpzRdWqgkurHiDEJTgkcQJx8Bf+2I9Bb8kG2/H6PRL7XfbwZub9dmbezDzCa6z5fH7EqTQ/AuFDZhwBMAUgvmmiDGCBCP+B8bsWC/46nU6vqZonFcFsdvmYCesCHJwggq6iwwwLGn4zoH+TyYz/IdPpCXJvIX9Qs82rzPyxzFCvfSK65QSMrw5PpR/6yfmCzGWXTjFb3wHkuX43LAC4TKR/MZOZuNHNUFeQ+9nFiwTMMrNS6FQJiYgZmD2Umfy6U2fbQQICzJdVje9IjuhSJ0wbiAgH4PzYb09s+3siBrTTrWHaAhGJSVbjH5WcCGga3kjGEI1GEDReXqKmaaFareFZsQLbcRQcxWXWQ0e9BN4Cmcsu/qJyO2LRCEZHUhAw3ZaAWF0roFKtSWHEbZrJTH4iBF0QUScstm7LNAXE2OgwiHrnMDNjZXVdCUYn/bioM67Fe9ncTWJ82gtEeGDqwJivJzp1hWcWHq1Iw8SEnw9n9p8kUbatcnNJVjGHhxIYTiVlTmvbXy8Usb5R6qkjKrAeD07Q3HzuDAPXZSfs3zeKcCgoE2vbrzeayD1eleoQcJbmsrnrzDgjk54+OAHNJ0H9dB3HwfzDJZlpEOEHuj+fuwPgXZn0IEEA3BUgTwDslYEMMjQAngqQOoCQDGRQybp5bkMZZFDXtxVEKTRCYRAFbRPEDY1Ssnqh62eJb0mHu8rXtzWH+tP0Xll0r69qQZMl82723YKmWuJ3c1AvXbfEU3BCuel5xiLhEEIhA8GgAT0Q2OrEouNato1m00SjYaJWbyixbzU9lTFAtP3UUALJeBS6HlA6wLJsFMtVFDZKEJB+q20MEEJ+g5Fh6Ng39ibEdyfLNC08XnkC8e1c2wYjIdBtVBRNbmoyrewFP1DhnYXFPEQTfLV8RsWXXmkfnkf2DrmzaT+WmGXXnm64psSzwnd49g7znhOaRnjrwPhrt34/aOGN/x8tw3FYkPR+TrTCxPZEZsfTw319YC3n17nyvKb2wPJgStXquWg48q2m0c6ytMM1jsNWtV77MhGNXuvmtZ5/XCgU3onHE9/reuC93eSJZdl/l8ulz1Op1L9+dpRcXyo9/ywcNs4bhv6+9wRRAGPTtP6q180ricSen2TySiCekbVi8e2YYZwMGMZxAj4IaNoQkeZWOGbHth1ng4E/bdO8XTHNmyPJ5AMZgLf/At/j2PAbUsw0AAAAAElFTkSuQmCC" />
							    <div className="userName">{Object.keys(this.props.userInfo).length > 0 && this.props.userInfo.role.name}</div>
									<CaretDownOutlined  style={{ color: 'rgba(255,255,255,.6)', cursor: 'pointer' }}/>
								</div>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	setUserInfo: data => {
		dispatch(setUserInfo(data));
	}
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(TopHeader));
