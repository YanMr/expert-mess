import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import top from '../../assets/img/login_banner.jpeg';
import './index.less';

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输入姓名" };
const realnameRules = { required: true, message: "请输入真实姓名" };
const remarkRules = { required: true, message: "请输入备注信息" };
const phoneRules = { required: true, message: "请输入手机号" };
const yzmRules = { required: true, message: "请输入验证码" };
const deptRules = { required: true, message: "请输入部门" };
const roletypeRules = { required: true, message: "请输入系统角色" };

class Register extends Component {
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
    console.log('Success:onFinish', values);
    console.log('formRef:onFinish', this.formRef);
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
          initialValues={{
            username: 'username',
            realname: 'realname',
            remark: 'remark',
            phonenumber: '180xxxxxxxx',
            dept: '部门',
            roletype: '系统角色'
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >

          <FormItem label="用户名" name="username" rules={[nameRules]}>
            <Input className="input" disabled placeholder="请输入用户名" />
          </FormItem>

          <FormItem label="真实姓名" name="realname" rules={[realnameRules]}>
            <Input className="input" placeholder="请输入真实姓名" />
          </FormItem>

          <FormItem label="备注信息" name="remark" rules={[remarkRules]}>
            <Input className="input" placeholder="请输入备注信息" />
          </FormItem>

          <FormItem label="部门" name="dept" rules={[deptRules]}>
            <Input className="input" disabled placeholder="请输入部门" />
          </FormItem>

          <FormItem label="系统角色" name="roletype" rules={[roletypeRules]}>
            <Input className="input" disabled placeholder="请输入系统角色" />
          </FormItem>

          <FormItem label="联系电话" name="phonenumber" rules={[phoneRules]}>
            <Input className="input" disabled placeholder="请联系电话" />
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
                  返回登录
                </Button>
              </FormItem>
            </div>

            <div className="btn">
              <FormItem>
                <Button type="primary" size="large" htmlType="submit">
                  修改
                </Button>
              </FormItem>
            </div>
          </div>
        </Form>
      </div>
    )

    return (
      <div>
        <div className="box_changeInfo">
          <div className="leftbox">
            <div className="log">修改信息</div>
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
      </div>
    )
  }
}

export default Register
