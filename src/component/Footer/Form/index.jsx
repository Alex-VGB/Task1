import React from 'react'
import {useForm} from 'react-hook-form'

import s from './Form.module.css'

function Form() {

    const {handleSubmit, register, errors} = useForm()
    const onSubmit = values => console.log(values)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    className={`${s.input} ${errors.email && s.focus}`}
                    placeholder='Enter your email address'
                    name='email'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"

                        }
                    })}
                />
                {errors.email
                && <span className={s.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <g fill="none" fillRule="evenodd">
                        <circle cx="10" cy="10" r="10" fill="#FA5959"/>
                        <g fill="#FFF" transform="translate(9 5)">
                            <rect width="2" height="7" rx="1"/>
                            <rect width="2" height="2" y="8" rx="1"/>
                        </g>
                    </g>
                </svg>
                    </span>
                }
                <label>
                    <p className={`${errors.email && s.errText}`}>
                        {errors.email && errors.email.message}
                    </p>
                </label>
            </div>
            <button
                className={s.btn}
                type="submit">Contact Us</button>


        </form>

    )

}

export default Form