import React from 'react'

import './form-input.style.scss'

const FormInput = ({ handelChange, label , ...otherProps }) => (
    <div className="group">
        <input onChange={handelChange} className= "form-input" {...otherProps}/>
        {
        label ? 
        (<label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>{label}</label>)
        : null
        }
    </div>
)

export default FormInput;