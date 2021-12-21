import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input, Form, Button, Row, Col, Radio, Icon} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import '../less/bank.less';

const FormItem = Form.Item;
class Single extends Component {
	formRef = React.createRef();
	constructor(props) {
		super(props);
		this.state = {
			rightAnswer: '',
			option: [{
				option : 'A',
				key : 0
			}, {
				option : 'B',
				key : 1
			},{
				option : 'C',
				key : 2
			}, {
				option : 'D',
				key : 3
			}]
		};
	}

	  //点击答案
		clickWhichAnswer(option){
			this.setState({rightAnswer : option})
			// console.log(this.state.rightAnswer)
		}

	render() {
		return (
			<div className="shadow-radius">
					<Form ref={this.formRef} className="login-form">
					  <FormItem label="提干" name="question" rules={[{ required: true, message: '请输入提干！' }]}>
							<Input.TextArea placeholder="请输入提干" />
						</FormItem>
						{
						this.state.option.map((item, index) => {
							return(
								<Row gutter={24}>
								<Col span={21}>
								<FormItem label={"选项" + item.option}>
									<Input addonAfter={<Radio checked={this.state.rightAnswer === item.option} onClick={this.clickWhichAnswer.bind(this,item.option)} >正确答案</Radio>}/>
								</FormItem>
								</Col>
								<Col span={2} offset={1}><Button ><DeleteOutlined /></Button></Col>
								</Row>
							)
						})
						}
						 <FormItem
          >
            <Row>
              <Col sm={3} xs={0}>
              </Col>
              <Col sm={20} xs={24}>
                <Row>
                  <Col sm={4} xs={4} offset={13}>
                    <Button type="primary">新增选项</Button>
                  </Col>
                  <Col sm={4} xs={4}>
                    <Button type="primary" htmlType="submit">保存</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormItem>
					</Form>
			</div>
		);
	}
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Single));
