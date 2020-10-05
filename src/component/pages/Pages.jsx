import React from 'react'
import {Route} from 'react-router-dom'

import Features from './Features'
import Pricing from './Pricing'
import Contact from './Contact'
import Login from './Login'
import Home from './Home'

function Pages() {
    return (
        <section>
            <Route path='/' component={Home} exact />
            <Route path='/features' component={Features} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
        </section>
    )
}

export default Pages