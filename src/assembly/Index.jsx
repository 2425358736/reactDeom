import React from 'react'
import Bar from './echarts/Bar'
import Line from './echarts/Line'
import Pie from './echarts/Pie'

class Index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
  toggleCollapsed = () => {
      this.setState({
          collapsed: !this.state.collapsed,
          left: this.state.left === '82%' ? '0%' : '82%'
      })
  }
  render () {
      return (
          <div style={{
              padding: 24,
              background: '#fff' }}
          >
              <Bar option={{
                  title: { text: 'ECharts 入门示例' },
                  tooltip: {},
                  xAxis: {
                      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                  },
                  yAxis: {},
                  series: [{
                      name: '销量',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20]
                  }]
              }}
              />
              <Line
                  option={{
                      title: {
                          text: '一天用电量分布',
                          subtext: '纯属虚构'
                      },
                      tooltip: {
                          trigger: 'axis',
                          axisPointer: {
                              type: 'cross'
                          }
                      },
                      toolbox: {
                          show: true,
                          feature: {
                              saveAsImage: {}
                          }
                      },
                      xAxis: {
                          type: 'category',
                          boundaryGap: false,
                          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
                      },
                      yAxis: {
                          type: 'value',
                          axisLabel: {
                              formatter: '{value} W'
                          },
                          axisPointer: {
                              snap: true
                          }
                      },
                      visualMap: {
                          show: false,
                          dimension: 0,
                          pieces: [{
                              lte: 6,
                              color: 'green'
                          }, {
                              gt: 6,
                              lte: 8,
                              color: 'red'
                          }, {
                              gt: 8,
                              lte: 14,
                              color: 'green'
                          }, {
                              gt: 14,
                              lte: 17,
                              color: 'red'
                          }, {
                              gt: 17,
                              color: 'green'
                          }]
                      },
                      series: [
                          {
                              name: '用电量',
                              type: 'line',
                              smooth: true,
                              data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                              markArea: {
                                  data: [ [{
                                      name: '早高峰',
                                      xAxis: '07:30'
                                  }, {
                                      xAxis: '10:00'
                                  }], [{
                                      name: '晚高峰',
                                      xAxis: '17:30'
                                  }, {
                                      xAxis: '21:15'
                                  }] ]
                              }
                          }
                      ]
                  }}
              />
              <Pie option={
                  {
                      tooltip: {
                          trigger: 'item',
                          formatter: '{a} <br/>{b}: {c} ({d}%)'
                      },
                      legend: {
                          orient: 'vertical',
                          x: 'left',
                          data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
                      },
                      series: [
                          {
                              name: '访问来源',
                              type: 'pie',
                              selectedMode: 'single',
                              radius: [0, '15%'],

                              label: {
                                  normal: {
                                      position: 'inner'
                                  }
                              },
                              labelLine: {
                                  normal: {
                                      show: false
                                  }
                              },
                              data: [
                                  {value: 335,
                                      name: '直达',
                                      selected: true},
                                  {value: 679,
                                      name: '营销广告'},
                                  {value: 1548,
                                      name: '搜索引擎'}
                              ]
                          },
                          {
                              name: '访问来源',
                              type: 'pie',
                              radius: ['20%', '35%'],
                              label: {
                                  normal: {
                                      formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                      backgroundColor: '#eee',
                                      borderColor: '#aaa',
                                      borderWidth: 1,
                                      borderRadius: 4,
                                      // shadowBlur:3,
                                      // shadowOffsetX: 2,
                                      // shadowOffsetY: 2,
                                      // shadowColor: '#999',
                                      // padding: [0, 7],
                                      rich: {
                                          a: {
                                              color: '#999',
                                              lineHeight: 22,
                                              align: 'center'
                                          },
                                          // abg: {
                                          //     backgroundColor: '#333',
                                          //     width: '100%',
                                          //     align: 'right',
                                          //     height: 22,
                                          //     borderRadius: [4, 4, 0, 0]
                                          // },
                                          hr: {
                                              borderColor: '#aaa',
                                              width: '100%',
                                              borderWidth: 0.5,
                                              height: 0
                                          },
                                          b: {
                                              fontSize: 16,
                                              lineHeight: 33
                                          },
                                          per: {
                                              color: '#eee',
                                              backgroundColor: '#334455',
                                              padding: [2, 4],
                                              borderRadius: 2
                                          }
                                      }
                                  }
                              },
                              data: [
                                  {value: 335,
                                      name: '直达'},
                                  {value: 310,
                                      name: '邮件营销'},
                                  {value: 234,
                                      name: '联盟广告'},
                                  {value: 135,
                                      name: '视频广告'},
                                  {value: 1048,
                                      name: '百度'},
                                  {value: 251,
                                      name: '谷歌'},
                                  {value: 147,
                                      name: '必应'},
                                  {value: 102,
                                      name: '其他'}
                              ]
                          }
                      ]
                  }
              }
              />
          </div>
      )
  }
}

export default Index
