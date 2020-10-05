import React from 'react'

import './TabBg.css'

function TabBg(props) {

    return (
        <div className={`tabMain ${props.cls}`}>
            <div className='containerBg' >
                <img src={props.linkImgTab} alt="tab"/>
            </div>
        </div>
    )
}

export default TabBg