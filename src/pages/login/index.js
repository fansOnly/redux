import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Icon } from 'antd';

import './index.scss';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        remember: true,
        isLogin: false
    }
    login = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('当前表单输入', values);
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login-box'>
                <div className='login-title'>后台管理系统</div>
                <Form onSubmit={this.login} className='login-form'>
                    <Form.Item className='login-form-item'>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入用户名'}]
                        })(
                            <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='username' />
                        )}
                    </Form.Item>
                    <Form.Item className='login-form-item'>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码'}]
                        })(
                            <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='password' />
                        )}
                    </Form.Item>
                    <Form.Item className='login-form-item'>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码？</a>
                        <Button type='primary' block htmlType='submit' className='login-form-button'>登录</Button>
                        <p>没有账号？<a href="" className=''>现在注册</a></p>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Form.create({name:'login_form'})(LoginForm);