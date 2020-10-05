import React from 'react'

import s from './Accordion.module.css'

function Accordion({title, active, setActive}) {

    return (
        <div className={s.accordion}>
            <div className={s.accordionHeading}>
                <div
                    onClick={() => setActive(title)}
                    className={s.container}>
                    <h5>{title}</h5>
                    <span>
                        {active === title
                            ? <svg className={s.arrUp} xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="#fa5757" strokeWidth="3" d="M1 1l8 8 8-8"/>
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8"/>
                            </svg>
                        }
                    </span>
                </div>
            </div>
            <div className={`${(active === title ? s.show : '')} ${s.accordionContent}`}>
                <div className={s.container}>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Accordion