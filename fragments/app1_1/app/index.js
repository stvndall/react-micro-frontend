import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { settings } from 'settings'
import Loader from 'moduleLoader'


console.log('loaded');
//
// export default class App1Nested extends PureComponent {
//
//     render() {
//         return null; /*<div> this shows where App1_1 loading</div>*/
//     }
// }

//
// render(<App1_1/>, document.getElementById('app1_1'));


exports.entry = console.log;