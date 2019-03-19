import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

export default class App1_1Details extends PureComponent {

    constructor() {
        super()
    }


    render() {
        return (<div>
            <button onClick={() => console.log('logging to console!!!!')} >{this.props.text}</button>
        </div>);
    }
}
// App1_1Details.PropTypes = {text : propTypes.string}