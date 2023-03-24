import React from 'react';

const Input = (props) => {
    const { className, type, name, placeholder, value } = props;
    return (
        <input
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default Input;
