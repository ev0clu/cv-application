import React from 'react';

const Header = (props) => {
    const { form } = props;

    return (
        <div className="preview-header">
            <h1>
                {form.firstName} {form.lastName}
            </h1>
            <h2>{form.title}</h2>
            <p>{form.description}</p>
        </div>
    );
};

export default Header;
