import React from 'react'

import s from './Extension.module.css'
import ExtensionItem from './ExtensionItem'

import chromeImg from '../../../../assets/img/logo-chrome.svg'
import firefoxImg from '../../../../assets/img/logo-firefox.svg'
import operaImg from '../../../../assets/img/logo-opera.svg'

function Extension() {
    return (
        <div>
            <div className={s.text}>
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if <br/>
                    you've got a favourite you'd like us to prioritize.</p>
            </div>

            <div className={s.items}>
                <div className={s.item}>
                    <ExtensionItem
                        browserName='Chrome'
                        versionNum='62'
                        srcImage={chromeImg}
                        browserLink='#'
                    />
                </div>
                <div className={s.item}>
                    <ExtensionItem
                        browserName='Firefox'
                        versionNum='55'
                        srcImage={firefoxImg}
                        browserLink='#'
                    />
                </div>
                <div className={s.item}>
                    <ExtensionItem
                        browserName='Opera'
                        versionNum='46'
                        srcImage={operaImg}
                        browserLink='#'
                    />
                </div>
            </div>

        </div>
    )
}

export default Extension