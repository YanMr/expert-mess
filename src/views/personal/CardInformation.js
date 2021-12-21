import React, { Component } from 'react';
import { Card, Tabs, Button, Image, Table } from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
moment.locale('zh-cn');

// const FormItem = Form.Item;
const { TabPane } = Tabs;

class CardInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource1: [
        // https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png
        { key: '1', ordernum: '1', certkind: '证件分类1', ecertstorepath: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', ecertalt: '电子件备注1' },
        { key: '2', ordernum: '2', certkind: '证件分类2', ecertstorepath: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png', ecertalt: '电子件备注2' },
      ],
      columns1: [
        { title: '排序号', dataIndex: 'ordernum', key: 'ordernum' },
        { title: '证件分类', dataIndex: 'certkind', key: 'certkind' },
        {
          title: '证件',
          key: 'ecertstorepath',
          render: (text, record) => (
            <div>
              <Image
                width={100}
                src={record.ecertstorepath}
              />
            </div>
          ),
        },
        { title: '电子件备注', dataIndex: 'ecertalt', key: 'ecertalt' },
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
        {
          key: '1',
          ordernum: '1',
          begvaliddate: '注册时间1',
          endvaliddate: '过期时间1',
          certname: '职业资格名称1',
          certno: '职业资格证书号1',
          registerorg: '注册单位1',
          registerno: '注册号1',
          ecertrelativeurl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
      ],
      columns2: [
        { title: '排序号', dataIndex: 'ordernum', key: 'ordernum' },
        { title: '注册时间', dataIndex: 'begvaliddate', key: 'begvaliddate' },
        { title: '过期时间', dataIndex: 'endvaliddate', key: 'endvaliddate' },
        { title: '职业资格名称', dataIndex: 'certname', key: 'certname' },
        { title: '职业资格证书号', dataIndex: 'certno', key: 'certno' },
        { title: '注册单位', dataIndex: 'registerorg', key: 'registerorg' },
        { title: '注册号', dataIndex: 'registerno', key: 'registerno' },
        {
          title: '证件',
          key: 'ecertstorepath',
          render: (text, record) => (
            <div>
              <Image
                width={100}
                src={record.ecertrelativeurl}
              />
            </div>
          ),
        },
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
        {
          ordernum: 1,
          certname: '技术职称名称1',
          dtapproved: '获得时间1',
          ecertrelativeurl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
        {
          ordernum: 2,
          certname: '技术职称名称2',
          dtapproved: '获得时间2',
          ecertrelativeurl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        },
      ],
      columns3: [
        { title: '排序号', dataIndex: 'ordernum', key: 'ordernum' },
        { title: '技术职称名称', dataIndex: 'certname', key: 'certname' },
        { title: '获得时间', dataIndex: 'dtapproved', key: 'dtapproved' },
        {
          title: '证件',
          key: 'ecertstorepath',
          render: (text, record) => (
            <div>
              <Image
                width={100}
                src={record.ecertrelativeurl}
              />
            </div>
          ),
        },
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

  render() {
    return (
      <div className='personal_info'>
        <Card bordered={false}
          style={{ margin: 'auto', width: '100%', height: '85vh' }}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span>基础证件信息</span>} key="1">
              <Table dataSource={this.state.dataSource1} columns={this.state.columns1} pagination={false} bordered />
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">基础证件信息</Button>
              </div>
            </TabPane>
            <TabPane tab={<span>职业注册资格信息</span>} key="2">
              <Table dataSource={this.state.dataSource2} columns={this.state.columns2} pagination={false} bordered />
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">职业注册资格信息</Button>
              </div>
            </TabPane>
            <TabPane tab={<span>技术职称信息</span>} key="3">
              <Table dataSource={this.state.dataSource3} columns={this.state.columns3} pagination={false} bordered />
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">技术职称信息</Button>
              </div>
            </TabPane>

          </Tabs>
        </Card>
      </div>
    )
  }
}

export default CardInformation;
