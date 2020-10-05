import React from 'react'

import s from './Slider.module.css'
import Button from '../../../UI/Button'
import TabBg from '../../../UI/TabBg'
import rightImage from '../../../../assets/img/illustration-hero.svg'

function Slider() {
    return (
        <div className={s.container}>
            <div className={s.leftContainer}>
                <div>
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite
                        websites. Open a new browser tab and see yor sites load instantly.
                        Try it for free.</p>
                </div>
                <div className={s.btn}>
                    <div>
                        <Button title='Get it on Chrome' link='#' cls='btnBlue'/>
                    </div>
                    <div  className={s.pdngRight}>
                        <Button title='Get it on Firefox' link='#' cls='btnGrey'/>
                    </div>
                </div>
            </div>
            <TabBg
                linkImgTab={rightImage}
                cls='rightContainer'/>
        </div>
    )
}

export default Slider
