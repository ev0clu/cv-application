import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

import '../assets/styles/Main.css';

const Main = (props) => {
    const { form, handleChange, handleAddClick, handleDeleteClick } = props;
    return (
        <main className="main">
            <CVForm
                form={form}
                handleChange={handleChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <CVPreview />
        </main>
    );
};

export default Main;
