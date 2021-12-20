import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import top from '../../assets/img/login_banner.jpeg';
import './index.less';

const FormItem = Form.Item;

const passwordRules = { required: true, message: "请输入密码" };
const phoneRules = { required: true, message: "请输入手机号" };
const yzmRules = { required: true, message: "请输入验证码" };

class ForgetPassword extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      btnBool: false,
      btnText: '获取验证码',
      buttonCode: 'ButtonDefault',
    }
  }
  componentDidMount() {

  }

  onRChange = (e, txt) => {
    switch (txt) {
      case 'email':
        this.setState({ email: e.target.value })
        break;
      default:
        break;
    }
  }

  goLogin = () => {
    this.props.history.push('/login');
  }

  sendVerCode() {
    let maxTime = 30;

    this.timer = setInterval(() => {
      if (maxTime > 0) {
        --maxTime;
        this.setState({
          btnText: '已发送' + maxTime,
          buttonCode: 'buttonCode',
          btnBool: true
        })
      } else {
        clearInterval(this.timer);
        this.setState({
          btnText: '获取验证码',
          buttonCode: 'ButtonDefault',
          btnBool: false
        })
      }
    }, 1000);

    // axiosRequest(`/platform_portal/api/forget/mail?email=${this.state.email}`, 'GET').then(res => {
    //     if (res.code == 200) {
    //       message.info(res.data)
    //     } else {
    //       message.error(res.message);
    //       clearInterval(this.timer);
    //       this.setState({
    //         btnText: '获取验证码',
    //         buttonCode:'ButtonDefault',
    //         btnBool: false
    //       })
    //     }
    //     this.setState({
    //       confirmloading:false
    //     })
    // })
  }

  onFinish = (values) => {
    console.log('Success:', values);
    console.log('formRef:', this.formRef);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const { btnBool, btnText } = this.state
    const renderEmailAndPsw = (
      <div>
        <Form
          name="basic"
          ref={this.formRef}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <FormItem label="新密码" name="password" rules={[passwordRules]}>
            <Input className="input" placeholder="请输入需要重置的新密码" />
          </FormItem>

          <FormItem label="手机号" name="phonenumber" rules={[phoneRules]}>
            <Input className="input" placeholder="请再次输入手机号码" />
          </FormItem>

          <div className="yanzhengma">
            <FormItem label="验证码" name="yanzhengma" rules={[yzmRules]}>
              <Input
                allowClear
                className="inputverify"
                onChange={(e) => this.onRChange(e, 'emailrt')}
                placeholder="请输入验证码"
              />
            </FormItem>

            <div className="getcode">
              <FormItem>
                <Button className={btnBool ? 'buttonCode' : 'ButtonDefault'}
                  disabled={btnBool}
                  onClick={this.sendVerCode.bind(this)}
                >{btnText}</Button>
              </FormItem>
            </div>
          </div>

          <div className="resetsumit">
            <div className="btn">
              <FormItem>
                <Button type="default" size="large" onClick={this.goLogin}>
                  去登录
                </Button>
              </FormItem>
            </div>

            <div className="btn">
              <FormItem>
                <Button type="primary" size="large" htmlType="submit">
                  重置密码
                </Button>
              </FormItem>
            </div>
          </div>
        </Form>
      </div>
    )

    return (
      <div className="box_forget">
        <div className="leftbox">
          <div className="log">重置密码</div>
          <div className="zhezhao"></div>
          <div className="leftimg">
            <img className="logo2"
              src={top} alt=''
            />
          </div>
        </div>
        <div className="rightboxre">
          <div className="stepnew"></div>
          <div className="formstep">
            {renderEmailAndPsw}
          </div>
        </div>
      </div>
    )
  }
}

export default ForgetPassword;
