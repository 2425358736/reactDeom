import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SiderDemo from '../layout/SiderDemo'
import WrappedNormalLoginForm from '../assembly/Login'

class RouterConfig extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={SiderDemo} />
                    <Route exact path="/login" component={WrappedNormalLoginForm} />
                    <Route exact path="/home" component={SiderDemo} />
                    <Route exact path="/home/**" component={SiderDemo} />
                </div>
            </BrowserRouter>

        )
    }
}

export default RouterConfig
