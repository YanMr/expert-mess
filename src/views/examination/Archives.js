import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Table, Input } from 'antd';
import Configure from './com/Configure'
import './less/archives.less';
class Archives extends Component {
	constructor(props) {
		super(props);
		this.state = {
			configureFlag: false,
			columns: [{
				title: '考试批次',
				dataIndex: 'exambatch',
				key: 'exambatch',
			},{
				title: '考试名称',
				dataIndex: 'name',
				key: 'name',
			},{
				title: '所属年份',
				dataIndex: 'date',
				key: 'date',
			},{
				title: '操作',
				render: (text, record) => (
					<span size="middle">
						<span>编辑</span>
						<span>删除</span>
					</span>
				),
			},],
			data: []
		};
	}
	showConfigure = () => {
		this.setState({
			configureFlag: true
		})
	}

	close = () => {
		this.setState({
			configureFlag: false
		})
	}

	render() {
		return (
			<div className="shadow-radius">
				{!this.state.configureFlag ? <>
					<div className="addConfigure">
					<Button type="primary" onClick={this.showConfigure}>添加配置</Button>
				</div>
				<div class="conTab">
				<div className='serch'>
					<div className='inputValue'>
						考试名称：<Input placeholder="请输入考试名称" />
					</div>
					<div className='btn-Ser'><Button type="primary" >搜索</Button></div>
				</div>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				</div>
				</>: 	<Configure close={this.close} />}
			</div>
		);
	}
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Archives));
