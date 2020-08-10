import React, { Component } from 'react'
import { render } from 'react-dom'
import { moduleLoader } from 'moduleLoader'
import { settings } from 'settings'

let App1_1 = null;

class App1 extends React.PureComponent {


    constructor() {
        super();
        this.state = { count: 0, App1_1Loaded: false, textToPrint:"printToConsole" }
    }

    foundComponent(d) {
        App1_1 = d;
        this.setState({ App1_1Loaded: true })
    }


    loadNestedApp() {
        const callback = this.foundComponent.bind(this);
        const loader = new moduleLoader();

        new moduleLoader().Loader("app1_1", "http://localhost:3022/public/bundle.js", callback)
    }

    render() {

        return (<div>
            {this.state.count}
            {JSON.stringify(settings.setting)}
            <button onClick={this.loadNestedApp.bind(this)} >this is a button </button >
            <input type="text" value={this.state.textToPrint} onChange={(event) => {this.setState({textToPrint: event.target.value })}} />
            {this.state.App1_1Loaded?<App1_1 text={this.state.textToPrint}> </App1_1> : null}

            this shows where app1 would go, again</div>)
    }
}


render(<App1 />, document.getElementById('app1'))

document.createElement('script').attributes
