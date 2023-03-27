import React from 'react';

const Textarea = (props) => {
    const { handleChange, className, name, placeholder, value } = props;
    return (
        <textarea
            onChange={handleChange}
            className={className}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default Textarea;
