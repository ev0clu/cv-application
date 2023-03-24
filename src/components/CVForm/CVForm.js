import React from 'react';

import Personal from './Personal';
import Stack from './Stack';
import Experience from './Experience';
import Education from './Education';

import '../../assets/styles/CVForm.css';

const CVForm = () => {
    return (
        <form className="form">
            <Personal />
            <Stack />
            <Experience />
            <Education />
        </form>
    );
};

export default CVForm;
