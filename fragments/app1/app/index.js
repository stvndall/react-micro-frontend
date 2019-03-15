import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { settings } from 'settings'
import { moduleLoader } from 'moduleLoader'


class App1 extends PureComponent {



    constructor() {
        super();
        this.state = { count: 1 };
        this.Loader = new moduleLoader();
    }

    render() {

        const l = moduleLoader;
        const t = this.Loader;
        debugger;
        t.Loader("app1_1", "http://localhost:3022/public/bundle.js");
        return (<div>
                {this.state.count}
                {JSON.stringify(settings)}
                <input type="button" onClick={() => this.setState({ count: this.state.count + 1 })}/>
                this shows where app1 would go, again</div>
        );
    }
}


render(<App1/>, document.getElementById('app1'))


exports.entry = App1;