import React, { Component } from 'react'
import { render } from 'react-dom'
import {settings} from 'settings'

class App1 extends React.PureComponent {

    render() {
        return (<div>
            <input type="button" />
            { JSON.stringify(settings)}
            this shows where app1 would go, again</div>
            )
    }
}


render(<App1/>, document.getElementById('app1'))
