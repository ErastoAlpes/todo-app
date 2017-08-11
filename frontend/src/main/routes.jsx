import React from 'react'
import {Router , Route, Redirect, hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Help from '../help/help'

/**
 * na linha <Redirect from='*' to='/todos' />, qualquer outra url ira para a pagina 'todos'
 */
export default props =>(
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        <Route path='/help' component={Help}/>
        <Redirect from='*' to='/todos' />
    </Router>
)