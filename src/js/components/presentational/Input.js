import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Input = ({label, text, type, id, value, handleChange}) => {
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            value={value}
            id={id}
            className="form-control"
            onChange={handleChange}
            required
        />
    </div>
};


Input.propTypes = {
    label:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    handleChange:PropTypes.func.isRequired
};

export default Input;