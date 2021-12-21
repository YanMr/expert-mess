import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Row, Col, Radio, Tooltip } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import '../less/archives.less';

const FormItem = Form.Item;
class Configure extends Component {
	formRef = React.createRef();
	constructor(props) {
		super(props);
		this.state = {
			fullmark: 0,
			singlechoicerandom: 1,
			multichoicerandom: 1,
		};
	}
	// 单选题选项是否随机
	singleHand = (e) => {
		this.setState({
			singlechoicerandom: e.target.value
		})
	}

	// 对选题选项是否随机
	multieHand = (e) => {
		this.setState({
			multichoicerandom: e.target.value
		})
	}
	// 生成试卷
	generate = () => {
		this.formRef.current.validateFields().then((values) => {
		}).catch((errorInfo) => {
			console.log(errorInfo);
		})
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
				<Form ref={this.formRef} className="login-form">
					<Row gutter={24}>
					<Col span={8}>
						<FormItem label="考试名称" name="name" rules={[{ required: true, message: '请输入考试名称！' }]}>
							<Input placeholder="请输入考试名称" />
						</FormItem>
					</Col>
					<Col span={8}>
						<FormItem label="考试批次" name="exambatch" rules={[{ required: true, message: '请输入考试批次！' }]}>
							<Input placeholder="请输入考试批次" />
						</FormItem>
					</Col>
					<Col span={8}>
						<FormItem label="答题时间" name="minuties" rules={[{ required: true, message: '请输入答题时间！' }]}>
							<Input placeholder="请输入答题时间" />
						</FormItem>
					</Col>
					<Col span={8}>
						<FormItem label="及格分数" name="passmark" rules={[{ required: true, message: '请输入及格分数！' }]}>
							<Input placeholder="请输入及格分数" />
						</FormItem>
					</Col>
					<Col span={8}>
						<FormItem label="备注信息" name="remark" >
							<Input.TextArea placeholder="请输入备注信息" />
						</FormItem>
					</Col>
					</Row>
				</Form>
				<Row justify="center">
					<Col className="fullmark">
						试卷总分: <span className="fullmark_num">{this.state.fullmark}</span>分
					</Col>
				</Row>

				<div className="cardItem">
					<div className="cardTitel">单选题</div>
					<div className="cardMess">
						<Row className='row' gutter={24} justify="center">
							<Col>
								选项随机：
								<Radio.Group onChange={this.singleHand} value={this.state.singlechoicerandom}>
									<Radio value={1}>是</Radio>
									<Radio value={2}>否</Radio>
								</Radio.Group>
							</Col>
						</Row>
						<Row className='row' gutter={24} justify="center">
							<Col>
								个数：
								<InputNumber min={0} defaultValue={0} />
							</Col>
							<Col>
								分值：
								<InputNumber min={0} defaultValue={0} />
							</Col>
						</Row>
					</div>
				</div>

				<div className="cardItem">
					<div className="cardTitel">判断题</div>
					<div className="cardMess">
						<Row className='row' gutter={24} justify="center">
							<Col>
								个数：
								<InputNumber min={0} defaultValue={0} />
							</Col>
							<Col className='row'>
								分值：
								<InputNumber min={0} defaultValue={0} />
							</Col>
						</Row>
					</div>
				</div>

        <div className="cardItem">
					<div className="cardTitel">多选题</div>
					<div className="cardMess">
						<Row className='row' gutter={24} justify="center">
							<Col>
								选项随机：
								<Radio.Group onChange={this.multieHand} value={this.state.multichoicerandom}>
									<Radio value={1}>是</Radio>
									<Radio value={2}>否</Radio>
								</Radio.Group>
							</Col>
						</Row>
						<Row className='row' gutter={24} justify="center">
							<Col>
								个数：
								<InputNumber min={0} defaultValue={0} />
							</Col>
							<Col>
								分值：
								<InputNumber min={0} defaultValue={0} />
							</Col>
						</Row>
					</div>
				</div>

				<div className="cardItem">
					<div className="cardTitel">填空题</div>
					<div className="cardMess">
						<Row className='row' gutter={24} justify="center">
							<Col>
								个数：
								<InputNumber min={0} defaultValue={0} />
							</Col>
							<Col className='row'>
								分值：
								<InputNumber min={0} defaultValue={0} />
							</Col>
						</Row>
					</div>
				</div>

				<div className="cardItem">
					<div className="cardTitel">问答题</div>
					<div className="cardMess">
						<Row className='row' gutter={24} justify="center">
							<Col>
								个数：
								<InputNumber min={0} defaultValue={0} />
							</Col>
							<Col className='row'>
								分值：
								<InputNumber min={0} defaultValue={0} />
							</Col>
						</Row>
					</div>
				</div>

				<Button type="primary" block onClick={this.generate}>
					发布配置
				</Button>

			</div>
		);
	}
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Configure));
