import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { settings } from 'settings'
import { moduleLoader } from 'moduleLoader'
import propTypes from 'prop-types'
import App1_1Details from './App1_1Details'

console.log('loaded');
const ml = new moduleLoader();
ml.Register("app1_1", App1_1Details)
//
// export default class App1Nested extends PureComponent {
//
//     render() {
//         return null; /*<div> this shows where App1_1 loading</div>*/
//     }
// }

//
// render(<App1_1/>, document.getElementById('app1_1'));

const entry = console.log;

export { entry }
// exports.entry = console.log;