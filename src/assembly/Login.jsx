import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { apiGet } from '../api/request'
const FormItem = Form.Item

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
                let data = await apiGet('/login?loginName=' + values.userName + '&passWord=' + values.password)
                console.log(data)
                if (data.code === '202') {
                    window.location.href = '/home/index'
                }
                // if (values.userName === 'guest' && values.password === 'guest') {
                //     window.location.href = '/home/index'
                // }
            }
        })
    }
    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '-160px 0 0 -160px',
                width: '320px',
                height: '320px',
                padding: '36px',
                boxShadow: '0 0 100px rgba(0,0,0,.08)'
            }}
            >
                <div style={{
                    textAlign: 'center',
                    height: '40px',
                    lineHeight: '40px',
                    cursor: 'pointer',
                    marginBottom: '24px'
                }}
                >
                    <img style={{
                        width: '40px',
                        marginRight: '8px'
                    }} alt="logo" src="https://avatars1.githubusercontent.com/u/25731425?v=4&s=40"
                    />
                    <span style={{
                        verticalAlign: 'text-bottom',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        display: 'inline-block'
                    }}
                    >AntD Admin</span>
                </div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true,
                                message: 'Please input your username!' }]
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true,
                                message: 'Please input your Password!' }]
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button style={{
                            width: '100%'
                        }} type="primary" htmlType="submit" className="login-form-button"
                        >
                        Log in
                        </Button>
                        <p style={{
                            color: '#ccc',
                            textAlign: 'center',
                            marginTop: '16px'
                        }}
                        ><span>Username：lzq</span>&nbsp;&nbsp;&nbsp;<span>Password：123456</span></p>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm)

export default WrappedNormalLoginForm
