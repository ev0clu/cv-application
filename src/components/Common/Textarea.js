import React from 'react';

const Textarea = (props) => {
    const { className, name, placeholder, value } = props;
    return (
        <textarea
            className={className}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default Textarea;
