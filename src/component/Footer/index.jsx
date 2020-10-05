import React, {useEffect, useState} from 'react'

import s from './Footer.module.css'
import Form from './Form'

function Footer() {

    const [currentCount, setCount] = useState(35000);
    const timer = () => setCount(currentCount - 175);

    useEffect(
        () => {
            if (currentCount <= 0) {
                return;
            }
            const id = setInterval(timer, 100);
            return () => clearInterval(id);
        },
        [currentCount]
    );


    return (
        <div className={s.footer}>
            <div className={s.text}>
                <p>{currentCount} + ALREADY JOINED</p>
                <h2>Stay up-to-date with what <br/>
                    we're doing</h2>
                <Form/>
            </div>
        </div>
    )
}

export default Footer