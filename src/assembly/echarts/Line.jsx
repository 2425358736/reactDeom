import React, { Component } from 'react'

// 引入 ECharts 主模块
import echarts from 'echarts'

class Bar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            width: '400px',
            height: '400px'
        }
    }
    componentDidMount () {
        this.rendering()
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps)
        this.rendering()
    }
    rendering = () => {
        // this.setState({
        //     width: this.props.width ? this.props.width : '400px',
        //     height: this.props.height ? this.props.height : '400px'
        // })
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('Line'))
        // 绘制图表
        myChart.setOption(this.props.option)
    }
    render () {
        return (
            <div id="Line" style={{ width: this.state.width,
                height: this.state.height }}
            />
        )
    }
}

export default Bar
