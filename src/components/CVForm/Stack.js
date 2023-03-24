import React from 'react';
import Input from '../Common/Input';

const Stack = () => {
    return (
        <div className="stack">
            <h1>Stack</h1>
            <Input
                className="input-stack"
                type="text"
                name="stack"
                placeholder="Stack"
            />
            <Input
                className="input-stack"
                type="text"
                name="stack"
                placeholder="Stack"
            />
            <Input
                className="input-stack"
                type="text"
                name="stack"
                placeholder="Stack"
            />
        </div>
    );
};

export default Stack;
