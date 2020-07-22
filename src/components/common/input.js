import React from 'react';

const Input = (props) => {
    const { name, label, value, onChange, error } = props;
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
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;