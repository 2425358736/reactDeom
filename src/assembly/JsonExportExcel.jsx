import React from 'react'
import { Button } from 'antd'
const ExportJsonExcel = require('js-export-excel')
class JsonExportExcel extends React.Component {
    // 构造函数，在创建组件的时候调用
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount () {
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
    JsonExportExcel = () => {
        let option = {}

        option.fileName = 'excel'
        option.datas = [
            {
                sheetData: [{name: '刘志强',
                    www: '133',
                    age: '18'}, {name: '张三',
                    age: '13'}],
                sheetName: 'sheet',
                sheetFilter: ['name', 'age'],
                sheetHeader: ['姓名', '年龄']
            }// ,
            // {
            //     sheetData: [{one: '一行一列',
            //         two: '一行二列'}, {one: '二行一列',
            //         two: '二行二列'}]
            // }
        ]
        let toExcel = new ExportJsonExcel(option)
        toExcel.saveExcel()
    }
    render () {
        return (
            <Button onClick={this.JsonExportExcel}>
                导出
            </Button>)
    }
}

export default JsonExportExcel
