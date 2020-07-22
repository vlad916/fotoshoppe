import React from 'react';

const Input = (props) => {
    const { name, label, value, onChange } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                id="username"
                name="username"
                type="text"
                className="form-control"
            />
        <div className="alert alert-danger"></div>
        </div>
     );
}
 
export default Input;