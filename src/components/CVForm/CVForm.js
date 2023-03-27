import React from 'react';

import Personal from './Personal';
import Stack from './Stack';
import Experience from './Experience';
import Education from './Education';
import Button from '../Common/Button';

import '../../assets/styles/CVForm.css';

const CVForm = (props) => {
    const {
        form,
        handlePersonalInfoChange,
        handleGeneralInfoChange,
        handleAddClick,
        handleDeleteClick,
        handleExampleClick,
        handleResetClick
    } = props;

    return (
        <form className="form">
            <Personal personal={form} handleChange={handlePersonalInfoChange} />
            <Stack
                stacks={form.stack}
                handleChange={handleGeneralInfoChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <Experience
                experiences={form.experience}
                handleChange={handleGeneralInfoChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <Education
                educations={form.education}
                handleChange={handleGeneralInfoChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <Button
                className="btn-example"
                text="Load Example"
                handleClick={handleExampleClick}
            />
            <Button
                className="btn-reset"
                text="Reset"
                handleClick={handleResetClick}
            />
        </form>
    );
};

export default CVForm;
