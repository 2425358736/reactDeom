import React from 'react'
import { Route } from 'react-router-dom'
import MenuLeft from '../assembly/MenuLeft'

class RouterConfigInfo extends React.Component {
    render () {
        return (
            <Route exact path="/index" component={MenuLeft} />
        )
    }
}

export default RouterConfigInfo
