import React, { Component } from 'react';
import { Card, Tabs, Button } from 'antd'
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
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">基础证件信息</Button>
              </div>
            </TabPane>
            <TabPane tab={<span>职业注册资格信息</span>} key="2">
              <div style={{ marginTop: '10px' }}>
                <Button type='primary' size="large">职业注册资格信息</Button>
              </div>
            </TabPane>
            <TabPane tab={<span>技术职称信息</span>} key="3">
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
