import React from 'react'
import ReactDOM from 'react-dom'
import RouterConfig from './router/router'
class Index extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    render () {
        return (
            <div>
                <RouterConfig />
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'))

