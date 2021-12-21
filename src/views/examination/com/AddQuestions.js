import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tabs, Tooltip } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import Single from  './Single'
import '../less/bank.less';

const { TabPane } = Tabs;

class AddQuestions extends Component {
	formRef = React.createRef();
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	// 返回
	back = () => {
	  this.props.close()
	}

	render() {
		return (
			<div className="shadow-radius">
				<div className='back' onClick={this.back}>
				<Tooltip title="返回">
				<RollbackOutlined /><span>返回</span>
				</Tooltip>
				</div>
				<div className='add'>
				  <Tabs defaultActiveKey="1" >
						<TabPane tab="单选题" key="1">
							<Single />
						</TabPane>
						<TabPane tab="判断题" key="2">
						</TabPane>
						<TabPane tab="多选题" key="3">
						</TabPane>
						<TabPane tab="填空题" key="4">
						</TabPane>
						<TabPane tab="问答题" key="5">
						</TabPane>
					</Tabs>
				</div>

			</div>
		);
	}
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(AddQuestions));
