import React from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';

const Stack = (props) => {
    const { stacks, handleChange, handleAddClick, handleDeleteClick } = props;

    return (
        <div className="stack">
            <h1>Stack</h1>
            {stacks.map((stack, index) => {
                return (
                    <div
                        key={stack.id}
                        className="stack-group"
                        data-index={index}
                    >
                        <Input
                            className="input-stack"
                            type="text"
                            name="stack"
                            placeholder="Stack"
                            value={stack.text}
                            handleChange={handleChange}
                        />
                        <Button
                            className="btn-stack-delete"
                            text="Delete"
                            handleClick={handleDeleteClick}
                        />
                    </div>
                );
            })}
            <Button
                className="btn-stack-add"
                text="Add"
                handleClick={handleAddClick}
            />
        </div>
    );
};

export default Stack;
