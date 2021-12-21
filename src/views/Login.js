import React, { Component } from 'react';
import ReactSimpleVerify from 'react-simple-verify'
import 'react-simple-verify/dist/react-simple-verify.css'
import { Form, Input, Button, Tabs, Select, message } from 'antd';
import { connect } from 'react-redux';
import { login } from '@/server/register';
import { setUserInfo } from '@/redux/actions/userInfo';
import '@/assets/css/login';
import banner from "@/assets/img/login_banner.jpeg"
import qs from 'qs'

const { TabPane } = Tabs;
const { Option } = Select;
const FormItem = Form.Item;

const selectBefore = (
	<Select defaultValue="+86" className="select-before">
		<Option value="+86">+86</Option>
		<Option value="+863">+863</Option>
	</Select>
);

class Login extends Component {
	formRef = React.createRef();
	constructor(props) {
		super(props);
		this.state = {
			clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
			userName: '',
			password: '',
			phone: '',
			phoneV: '',
			submitType: false,
			tabKey: '1',
			submitTypePhone: false,
			isPass: false,
			count: 60,
			liked: true,
			server: false,
			userMessage: {}
		};
	}

	login = async e => {
		e.preventDefault();
		
		// await testGet()
		console.log('this.formRef.current', this.formRef)
		console.log('this.formRef.current.getgetFieldsValue()', this.formRef.current.getFieldsValue())
		let loginRes = await login(qs.stringify({
			username: this.state.userName,
			password: this.state.password,
			// username: 'expert001',
			// password: '784651',
		}))
		console.log('loginRes', loginRes)
		if (loginRes.data.code === 1) {
			localStorage.setItem('token', loginRes.data.data)

			this.formRef.current.validateFields().then((values) => {
				localStorage.setItem('isLogin', '1');
				// 模拟生成一些数据
				this.props.setUserInfo(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } }));
				localStorage.setItem('userInfo', JSON.stringify(Object.assign({}, values, { role: { type: 1, name: '超级管理员' } })));
				this.props.history.push('/dashboard');
			}).catch((errorInfo) => {
				console.log(errorInfo);
			})

		} else {
			message.error(`${loginRes.data.code}：${loginRes.data.msg}`)
			return
		}
	
	};
	componentDidMount() {
		window.addEventListener('resize', this.onResize);
	}
	componentWillUnmount() {
		window.addEventListener('resize', this.onResize);
		// componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
		this.setState = () => {
			return;
		};
	}

	// 去注册
	register = () => {
		this.props.history.push('/register');
	}

	changeInfo = () => {
		this.props.history.push('/changeInfo');
	}

	forget = () => {
		this.props.history.push('/forgetPassword');
	}

	onResize = () => {
		this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight });
	}

	// 模式切换
	callback = (key) => {
		if (key === '1') {
			this.setState({
				isPass: false
			})
		}
		this.setState({
			tabKey: key
		})
	}
	// 按钮显示
	userNameFun = (event) => {
		this.setState({
			userName: event.target.value
		}, () => {
			this.state.password && this.state.userName ? this.setState({ submitType: true }) : this.setState({ submitType: false })
		})
	}

	passwordFun = (event) => {
		this.setState({
			password: event.target.value
		}, () => {
			this.state.password && this.state.userName ? this.setState({ submitType: true }) : this.setState({ submitType: false })
		})
	}

	phoneFun = (event) => {
		this.setState({
			phone: event.target.value
		}, () => {
			this.state.phone && this.state.phoneV ? this.setState({ submitTypePhone: true }) : this.setState({ submitTypePhone: false })
		})
	}

	phoneVFun = (event) => {
		this.setState({
			phoneV: event.target.value
		}, () => {
			this.state.phone && this.state.phoneV ? this.setState({ submitTypePhone: true }) : this.setState({ submitTypePhone: false })
		})
	}

	// 拖动验证
	simpleVerify = () => {
		if (!this.state.phone) {
			this.setState({
				isPass: true
			})
			this.formRef.current.validateFields()
		} else {
			this.setState({
				isPass: true
			}, () => {
				this.handleClick()
			})
		}
	}

	// 倒计时
	countDown = () => {
		const { count } = this.state;
		if (count === 1) {
			this.setState({
				count: 60,
				liked: true,
			});
		} else {
			this.setState({
				count: count - 1,
				liked: false,
			});
			setTimeout(this.countDown, 1000)
		}
	}

	// 发送验证码
	handleClick = () => {
		const { liked } = this.state;
		if (!liked) {
			return;
		}
		this.countDown();
	};

	render() {
		return (
			<div className="container" style={{ 'height': this.state.clientHeight }}>
				<div className="content-main">
					<div className="steed-title">专家信息库管理系统</div>
					<div className="content">
						<div className="login-main">
							<div className="login-img">
								<img className='login-banner' alt="banner" src={banner}></img>
							</div>
							<div className="login-form-z">
								<Tabs defaultActiveKey={this.state.tabKey} onChange={this.callback}>
									<TabPane tab="密码登录" key="1">
										{this.state.tabKey === '1' ? (<Form ref={this.formRef} className="login-form">
											<FormItem
												name="username"
												rules={[{ required: true, message: '请填写手机号/邮箱！' }]}
											>
												<Input placeholder="手机号/邮箱" onChange={this.userNameFun} />
											</FormItem>
											<FormItem
												name="password"
												rules={[{ required: true, message: '请填写密码！' }]}
											>
												<Input.Password placeholder="密码" onChange={this.passwordFun} />
											</FormItem>
											<FormItem>
												<Button type="primary" disabled={!this.state.submitType} htmlType="submit" block onClick={this.login}>
													登录
												</Button>
												<div className="forget-pass" style={{ color: '#4164F0' }} onClick={this.forget}>忘记密码？</div>
											</FormItem>
										</Form>) : ''}
									</TabPane>
									<TabPane tab="短信登录" key="2">
										{this.state.tabKey === '2' ? (<Form ref={this.formRef} className="login-form">
											<FormItem
												name="phone"
												rules={[{ required: true, message: '请填写正确的手机号！' }]}
											>
												<Input addonBefore={selectBefore} onChange={this.phoneFun} />
											</FormItem>
											<FormItem
												name="phoneCode"
												rules={[{ required: true, message: '请输入验证码！' }]}
											>
												<div>
													<ReactSimpleVerify ref="verify" width={277} movedColor="#4164F0" successTips="已通过" success={this.simpleVerify} />
													{
														this.state.isPass ? (<div className="Verification">
															<div className="code-input"><Input placeholder="请输入验证码" onChange={this.phoneVFun} /></div>
															<div className="code-click">
																<Button type="primary" disabled={!this.state.liked} onClick={this.handleClick}>
																	{
																		this.state.liked ? '发送验证码' : `${this.state.count} 秒后重发`
																	}
																</Button>
															</div>
														</div>) : ''
													}
												</div>
											</FormItem>
											<FormItem>
												<Button type="primary" disabled={!this.state.submitTypePhone} htmlType="submit" block onClick={this.login}>
													登录
												</Button>
											</FormItem>
										</Form>) : ''}
									</TabPane>
								</Tabs>
								<div>
									<div className="action-s" onClick={this.changeInfo}>修改账号信息</div>
									<div className="action-s2" onClick={this.register}>没账号？去注册</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div className="copyright-one">粤公网安备000000000000号 / 粤ICP备00000000号</div>
					<div className="copyright-one">蓝之梦数据科技江苏有限公司 © 2020 STEED</div>
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
)(Login);
