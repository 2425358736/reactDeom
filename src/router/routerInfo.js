import React from 'react'
import { Route } from 'react-router-dom'
import Index from '../assembly/Index'
import Bar from '../assembly/echarts/Bar'
import JsonExportExcel from '../assembly/JsonExportExcel'
import WrappedRegistrationForm from '../assembly/RegistrationForm'
import Thumbnail from '../assembly/Thumbnail'
import RichText from '../assembly/RichText'

class RouterConfigInfo extends React.Component {
    render () {
        return (
            <div>
                <Route exact path="/index" component={Index} />
                <Route exact path="/Bar" component={Bar} />
                <Route exact path="/JsonExportExcel" component={JsonExportExcel} />
                <Route exact path="/WrappedRegistrationForm" component={WrappedRegistrationForm} />
                <Route exact path="/Thumbnail" component={Thumbnail} />
                <Route exact path="/RichText" component={RichText} />
            </div>
        )
    }
}

export default RouterConfigInfo
