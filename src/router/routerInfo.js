import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../assembly/Index'
import Bar from '../assembly/echarts/Bar'

class RouterConfigInfo extends React.Component {
    render () {
        return (
            <div>
                <Route exact path="/index" component={Index} />
                <Route exact path="/Bar" component={Bar} />
            </div>
        )
    }
}

export default RouterConfigInfo
