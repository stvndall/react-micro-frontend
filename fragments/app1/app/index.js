import React, { Component } from 'react'
import { render } from 'react-dom'
import { settings } from 'settings'
import Loader from 'moduleLoader'

class App1 extends React.PureComponent {

    state = { count: 1 };

    render() {

        const l = Loader;
        debugger;

        return (<div>
                {this.state.count}
                <input type="button"/>
                {JSON.stringify(settings)}
                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>click me</Button>
                this shows where app1 would go, again</div>
        )
    }
}


render(<App1/>, document.getElementById('app1'))
