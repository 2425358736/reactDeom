import React from 'react'

class MenuLeft extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            collapsed: false,
            left: '82%'
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
          <div style={{ fontSize: '250px',
              padding: 24,
              background: '#fff' }}
          >
             欢迎
          </div>
      )
  }
}

export default MenuLeft
