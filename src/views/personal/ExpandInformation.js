import React, { Component } from 'react';
import { Form, Card, Tabs, Table, Button } from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
moment.locale('zh-cn');

// const FormItem = Form.Item;
const { TabPane } = Tabs;


class ExpandInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource1: [
        { key: '1', ordernum: '1', begdate: 'begdate1', enddate: 'enddate1', college: 'college1', collegename: 'collegename1', edumajor: 'edumajor1', degree: 'degree1' },
        { key: '2', ordernum: '2', begdate: 'begdate2', enddate: 'enddate2', college: 'college2', collegename: 'collegename2', edumajor: 'edumajor2', degree: 'degree2' },
      ],
      columns1: [
        { title: '排序号', dataIndex: 'ordernum', key: 'ordernum' },
        { title: '开始时间', dataIndex: 'begdate', key: 'begdate' },
        { title: '结束时间', dataIndex: 'enddate', key: 'enddate' },
        { title: '毕业院校', dataIndex: 'college', key: 'college' },
        { title: '毕业院校名称', dataIndex: 'collegename', key: 'collegename' },
        { title: '所学专业', dataIndex: 'edumajor', key: 'edumajor' },
        { title: '学历', dataIndex: 'degree', key: 'degree' },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <div>
              <Button type="primary" danger onClick={() => { this.deleteEducation(record) }}>删除</Button>
            </div>
          ),
        }
      ],
      dataSource2: [
        { key: '1', ordernum: '1', begdate: 'begdate1', enddate: 'enddate1', company: 'company1', jobduty: 'jobduty1', position: 'position1' },
        { key: '2', ordernum: '2', begdate: 'begdate2', enddate: 'enddate2', company: 'company2', jobduty: 'jobduty2', position: 'position2' },
      ],
      columns2: [
        { title: '排序号', dataIndex: 'ordernum', key: 'ordernum' },
        { title: '开始时间', dataIndex: 'begdate', key: 'begdate' },
        { title: '结束时间', dataIndex: 'enddate', key: 'enddate' },
        { title: '工作单位', dataIndex: 'company', key: 'company' },
        { title: '主要从事工作', dataIndex: 'jobduty', key: 'jobduty' },
        { title: '担任职务', dataIndex: 'position', key: 'position' },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <div>
              <Button type="primary" danger onClick={() => { this.deleteEducation(record) }}>删除</Button>
            </div>
          ),
        }
      ],
      dataSource3: [
        { key: '1', ordernum: '1', companyno: 'companyno1', companyname: 'companyname1', avoidreason: 'avoidreason1' }
      ],
      columns3: [
        { title: '排序号', dataIndex: 'ordernum', key: 'ordernum' },
        { title: '单位代码', dataIndex: 'companyno', key: 'companyno' },
        { title: '单位名称', dataIndex: 'companyname', key: 'companyname' },
        { title: '回避原因', dataIndex: 'avoidreason', key: 'avoidreason' },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <div>
              <Button type="primary" danger onClick={() => { this.deleteEducation(record) }}>删除</Button>
            </div>
          ),
        }
      ],
    }
  }

  deleteEducation(record) {
    console.log('record1', record)
  }

  render() {
    return (
      <div className='personal_info'>
        <Card bordered={false}
          style={{ margin: 'auto', width: '100%', height: '85vh' }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span>教育经历</span>} key="1">
              <Table dataSource={this.state.dataSource1} columns={this.state.columns1} pagination={false} bordered />
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">新增教育经历</Button>
              </div>
            </TabPane>
            <TabPane tab={<span>工作经历</span>} key="2">
              <Table dataSource={this.state.dataSource2} columns={this.state.columns2} pagination={false} bordered />
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">新增工作经历</Button>
              </div>
            </TabPane>
            <TabPane tab={<span>回避单位信息</span>} key="3">
              <Table dataSource={this.state.dataSource3} columns={this.state.columns3} pagination={false} bordered />
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">新增回避单位</Button>
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default ExpandInformation;
