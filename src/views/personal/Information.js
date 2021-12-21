import React, { Component } from 'react';
import { Form, Card, Row, Col, Input, Select, DatePicker, Button, LocaleProvider, Cascader } from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import TextArea from 'antd/lib/input/TextArea';
moment.locale('zh-cn');

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输入姓名" };

class Information extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityOptions: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
                {
                  value: 'xiasha',
                  label: 'Xia Sha',
                  disabled: true,
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua men',
                },
              ],
            },
          ],
        },
      ],
    }
  }

  onFinish = (values) => {
    console.log('Success:', values);
    console.log('formRef:', this.formRef);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  cityFilter = (inputValue, path) => {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
  }

  render() {
    return (
      <div className='personal_info'>
        <Card bordered={false}
          style={{ margin: 'auto', width: '100%', height: '85vh' }}
        >
          <h3>个人基本信息</h3>
          <Form
            name="basic"
            ref={this.formRef}
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
            initialValues={{
              realname: '',
              gender: 'man',
              workstatus: '在职',
              cardtype: '身份证',
              cardno: '321',
              foreignlangs: [],
              langsprofi: '',
              bidstatus: '正式专家'
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <FormItem label="专家姓名" name="realname" rules={[nameRules]}>
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={10}>
                <Form.Item label="性别" name="gender">
                  <Select>
                    <Select.Option value="man">男</Select.Option>
                    <Select.Option value="women">女</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <Form.Item label="在职状态" name="workstatus">
                  <Select>
                    <Select.Option value="在职">在职</Select.Option>
                    <Select.Option value="离职">离职</Select.Option>
                    <Select.Option value="退休">退休</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="出生年月" name="birthyearmonth">
                  <LocaleProvider locale={zh_CN}>
                    <DatePicker placeholder='' picker="month" format="YYYY-MM" />
                  </LocaleProvider>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <Form.Item label="证件类型" name="cardtype">
                  <Select>
                    <Select.Option value="身份证">身份证</Select.Option>
                    <Select.Option value="社保卡">社保卡</Select.Option>
                    <Select.Option value="其他">其他</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={10}>
                <FormItem label="证件号码" name="cardno">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <Form.Item label="外语语种" name="foreignlangs">
                  <Select mode="multiple">
                    <Select.Option value="英语">英语</Select.Option>
                    <Select.Option value="德语">德语</Select.Option>
                    <Select.Option value="法语">法语</Select.Option>
                    <Select.Option value="其他">其他</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="外语熟练程度" name="langsprofi">
                  <Select>
                    <Select.Option value="精通">精通</Select.Option>
                    <Select.Option value="熟练">熟练</Select.Option>
                    <Select.Option value="一般">一般</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <FormItem label="工作单位" name="company">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem label="职务" name="position">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <FormItem label="通讯地址" name="addr">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem label="电子邮箱" name="email">
                  <Input className="input" type="email" placeholder="" />
                </FormItem>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <FormItem label="手机号码" name="tel">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem label="办公电话" name="officephone">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <FormItem label="银行账号" name="bankname">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem label="开户银行" name="bankaccount">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <FormItem label="所属地区" name="city">
                  <Cascader options={this.state.cityOptions} showSearch={this.cityFilter} />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem label="专业特长" name="speciality">
                  <Input className="input" placeholder="" />
                </FormItem>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={2}></Col>
              <Col span={10}>
                <Form.Item label="专家状态" name="bidstatus">
                  <Select>
                    <Select.Option value="正式专家">正式专家</Select.Option>
                    <Select.Option value="申请">申请</Select.Option>
                    <Select.Option value="暂停">暂停</Select.Option>
                    <Select.Option value="注销">注销</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="当前聘期截止" name="duevaliddate">
                  <LocaleProvider locale={zh_CN}>
                    <DatePicker placeholder='' />
                  </LocaleProvider>
                </Form.Item>
              </Col>
              <Col span={2}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <FormItem label="备注" name="remark">
                  <TextArea placeholder="" />
                </FormItem>
              </Col>
              <Col span={0}></Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={6}></Col>
              <Col span={8}>
                <Button type="primary" size="large" htmlType="submit">
                  保存信息
                </Button>
              </Col>
              <Col span={10}>
              <Button type="primary" size="large" htmlType="submit">
                  提交审核
                </Button>
              </Col>
            </Row>

          </Form>
        </Card>
      </div>
    )
  }
}

export default Information;
