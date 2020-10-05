import React from 'react'

import s from './Modal.module.css'

function Modal({active, setActive, children}) {
    return (
        <div
            onClick={() => setActive(false)}
            className={`${active ? s.modal + ' ' + s.active : s.modal}`}>
            <div
                onClick={e => e.stopPropagation()}
                className={`${active ? s.modalContent + ' ' + s.active : s.modalContent}`}>
                {children}
            </div>
        </div>
    )
}

export default Modal