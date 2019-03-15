import React, { Component } from 'react'
import { render } from 'react-dom'
import { settings } from 'settings'
import RegisterMe from 'register-me'


class App1 extends React.PureComponent {

    render() {
        return (<div> this shows where App1_1 loading</div>
        )
    }
}


render(<App1/>, document.getElementById('app1'))
