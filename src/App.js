import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import s from './App.module.css'
import Header from './component/Header'
import Pages from './component/pages/Pages'

function App() {

    return (
        <Router>
            <div className={s.App}>
                <Header/>
                <Pages/>
            </div>
        </Router>
    )
}

export default App
