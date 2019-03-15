import React, { Component } from 'react'
import { render } from 'react-dom'
import { settings } from 'settings'
import Loader from 'moduleLoader'


class App1_1 extends React.PureComponent {

    render() {
        return null; /*<div> this shows where App1_1 loading</div>*/
    }
}


render(<App1_1/>, document.getElementById('app1_1'))
