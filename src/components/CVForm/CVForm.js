import React from 'react';

import Personal from './Personal';
import Stack from './Stack';
import Experience from './Experience';
import Education from './Education';

import '../../assets/styles/CVForm.css';

const CVForm = (props) => {
    const { form, handleChange, handleAddClick, handleDeleteClick } = props;

    return (
        <form className="form">
            <Personal personal={form} handleChange={handleChange} />
            <Stack
                stacks={form.stack}
                handleChange={handleChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <Experience
                experiences={form.experience}
                handleChange={handleChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <Education
                educations={form.education}
                handleChange={handleChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
        </form>
    );
};

export default CVForm;
