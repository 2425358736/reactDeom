import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SiderDemo from '../layout/SiderDemo'
import MenuLeft from '../assembly/MenuLeft'

class RouterConfig extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/login" component={MenuLeft} />
                    <Route exact path="/home" component={SiderDemo} />
                    <Route exact path="/home/**" component={SiderDemo} />
                </div>
            </BrowserRouter>

        )
    }
}

export default RouterConfig
