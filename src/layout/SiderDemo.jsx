import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { Link, BrowserRouter } from 'react-router-dom'
import RouterConfigInfo from '../router/routerInfo'
// import { apiPost } from '../api/request'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

class SiderDemo extends React.Component {
    // 构造函数，在创建组件的时候调用
    constructor (props) {
        super(props)
        this.state = {
            collapsed: false,
            // 面包屑组
            crumbs: []
        }
    }
    onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({ collapsed })
    }
    menuItem = (item, key, keyPath) => {
        this.setState({
            crumbs: item.keyPath.reverse()
        })
        console.log(item)
        console.log(key)
        console.log(keyPath)
    }
    init = async () => {
        // let data = await apiPost('/index',
        //     {
        //         id: 12
        //     })
        // console.log(data)
    }
    componentWillMount () {
        this.init()
        console.log('组件挂载之前调用')
    }
    componentDidMount () {
        console.log('组件挂载之后调用')
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps)
        console.log('props是父组件传递给子组件的。父组件发生render的时候子组件就会调用')
    }
    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextProps)
        console.log(nextState)
        console.log('组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。')
        return true
    }
    componentWillUpdate (nextProps, nextState) {
        console.log(nextProps)
        console.log(nextState)
        console.log('shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用')
    }
    componentDidUpdate () {
        console.log('除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate')
    }
    componentWillUnmount () {
        console.log('组件被卸载的时候调用')
    }
    render () {
        return (
            <BrowserRouter basename="home">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu onClick={this.menuItem} theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <MenuItem key="caidan">
                                <Icon type="pie-chart" />
                                <span>菜单</span>
                            </MenuItem>
                            <MenuItem key="index">
                                <Link to="/index" style={{ color: '#e2e3db' }} >
                                    <Icon type="line-chart" />
                                    <span>index</span>
                                </Link>
                            </MenuItem>
                            <SubMenu
                                key="Form"
                                title={<span><Icon type="user" /><span>Form</span></span>}
                            >
                                <MenuItem key="WrappedRegistrationForm">
                                    <Link to="/WrappedRegistrationForm" style={{ color: '#e2e3db' }} >
                                    WrappedRegistrationForm
                                    </Link>
                                </MenuItem>
                                <MenuItem key="JsonExportExcel">
                                    <Link to="/JsonExportExcel" style={{ color: '#e2e3db' }} >
                                        JsonExportExcel
                                    </Link>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu
                                key="自定义组件"
                                title={<span><Icon type="file-unknown" /><span>自定义组件</span></span>}
                            >
                                <MenuItem key="图片缩略图">
                                    <Link to="/Thumbnail" style={{ color: '#e2e3db' }} >
                                    图片缩略图
                                    </Link>
                                </MenuItem>
                            </SubMenu>
                            <SubMenu
                                key="外部组件"
                                title={<span><Icon type="paper-clip" /><span>外部组件</span></span>}
                            >
                                <MenuItem key="富文本">
                                    <Link to="/RichText" style={{ color: '#e2e3db' }} >
                                    富文本
                                    </Link>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff',
                            padding: 0 }}
                        />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '12px 0' }}>
                                {this.state.crumbs.map((cru, i) => {
                                    return <Breadcrumb.Item key={i}>{cru}</Breadcrumb.Item>
                                })}
                            </Breadcrumb>
                            <RouterConfigInfo />
                            {/* {this.props.children}*/}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default SiderDemo
