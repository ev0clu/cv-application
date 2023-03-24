import React from 'react';

const Input = (props) => {
    const { handleChange, className, type, name, placeholder, key, value } =
        props;

    return (
        <input
            onChange={handleChange}
            className={className}
            type={type}
            name={name}
            placeholder={placeholder}
            key={key}
            value={value}
        />
    );
};

export default Input;
