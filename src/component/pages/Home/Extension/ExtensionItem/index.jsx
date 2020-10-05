import React from 'react'

import s from './ExtensionItem.module.css'
import Button from '../../../../UI/Button'

import dotsLine from '../../../../../assets/img/bg-dots.svg'

function ExtensionItem(props) {
    return (
        <div className={s.card}>
            <div className={s.logo}>
                <img src={props.srcImage} alt="browser"/>
            </div>
            <div className={s.text}>
                <h4>Add to {props.browserName}</h4>
                <p>Minimum version {props.versionNum}</p>
            </div>
            <div className={s.dots}>
                <img src={dotsLine} alt="dots line"/>
            </div>
            <div>
                <Button
                    title='Add & Install Extension'
                    link={props.browserLink}
                    cls='btnBlue'
                />

            </div>
        </div>
    )
}

export default ExtensionItem