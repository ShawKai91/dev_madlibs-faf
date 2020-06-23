import React from 'react';

const Input = (tittle, state, onChange, name) => {
    return(
        <div className="input">
            <input name={name} value={state} onChange={onChange}/>
            <label>{tittle}</label>
        </div>
    )
}

export default Input;