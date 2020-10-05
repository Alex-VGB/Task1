import React, {useState} from 'react'

import s from './Tabs.module.css'

function Tabs(props) {

    const [selected, setSelected] = useState(props.selected || 0)

    function handleChange(index) {
        return setSelected(index)
    }

    return (
        <div className={s.Tabs}>
            <div className={s.text}>
                <h2>Features</h2>
                <p>Our aim is to make it quick end easy for you to access your<br/>
                    favourite websites. Your bookmarks sync between your devices<br/>
                    so you can access them on the go</p>
            </div>
            <ul className={s.inline}>
                {
                    props.children.map((item, index) => {
                        let style = index === selected ? `${s.selected}` : ''
                        return <li
                            className={style}
                            key={index}
                            onClick={() => handleChange(index)}>
                            {item.props.title}
                        </li>
                    })
                }
            </ul>
            <div className={s.tab}>{props.children[selected]}</div>
        </div>
    )
}

export const Panel = (props) => {
    return <div>{props.children}</div>
}

export default Tabs