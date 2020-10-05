import React from 'react'

import './Button.css'

function Button(props) {

    return (
        <div className={`btn ${props.cls}`}>
            <a href={props.link}>{props.title}</a>
        </div>
    )
}

export default Button