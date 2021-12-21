import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tabs, Table, Button } from 'antd';
import AddQuestions from './com/AddQuestions'
import './less/bank.less';

const { TabPane } = Tabs;
class Bank extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [{
				title: '编号',
				dataIndex: 'id',
				key: 'id',
			},{
				title: '题干',
				dataIndex: 'question',
				key: 'question',
			},{
				title: '录入时间',
				dataIndex: 'time',
				key: 'time',
			},{
				title: '操作',
				render: (text, record) => (
					<span size="middle">
						<span>编辑</span>
						<span>删除</span>
					</span>
				),
			},],
			data: [],
			addQuestions: false
		};
	}
	addQuestions = () => {
		this.setState({
			addQuestions: true
		})
	}

	// 关闭添加试题
	close = () => {
		this.setState({
			addQuestions: false
		})
	}

	render() {
		return (
			<div className="shadow-radius">
				{!this.state.addQuestions ? <>
					<Button type="primary" onClick={this.addQuestions}>添加试题</Button>
						<Tabs defaultActiveKey="1" >
						<TabPane tab="单选题" key="1">
						<Table columns={this.state.columns} dataSource={this.state.data} />
						</TabPane>
						<TabPane tab="判断题" key="2">
						<Table columns={this.state.columns} dataSource={this.state.data} />
						</TabPane>
						<TabPane tab="多选题" key="3">
						<Table columns={this.state.columns} dataSource={this.state.data} />
						</TabPane>
						<TabPane tab="填空题" key="4">
						<Table columns={this.state.columns} dataSource={this.state.data} />
						</TabPane>
						<TabPane tab="问答题" key="5">
						<Table columns={this.state.columns} dataSource={this.state.data} />
						</TabPane>
					</Tabs>
				</> : <AddQuestions close={this.close} />}

			</div>
		);
	}
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Bank));
