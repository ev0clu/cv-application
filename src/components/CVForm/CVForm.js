import React from 'react';

import Personal from './Personal';
import Stack from './Stack';
import Experience from './Experience';
import Education from './Education';

import '../../assets/styles/CVForm.css';

const CVForm = (props) => {
    const { stacks, handleChange, handleAddClick, handleDeleteClick } = props;

    return (
        <form className="form">
            <Personal />
            <Stack
                stacks={stacks}
                handleChange={handleChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            {/* <Experience />*/}
            {/*<Education />*/}
        </form>
    );
};

export default CVForm;
