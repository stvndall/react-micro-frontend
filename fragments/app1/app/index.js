import React, { Component } from 'react'
import { render } from 'react-dom'

class App1 extends React.PureComponent {

    render() {
        return (<div>this shows where app1 would go, again</div>)
    }
}


render(<App1/>, document.getElementById('app1'))
