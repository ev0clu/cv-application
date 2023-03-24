import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

import '../assets/styles/Main.css';

const Main = (props) => {
    const { stacks, handleChange, handleAddClick, handleDeleteClick } = props;
    return (
        <main className="main">
            <CVForm
                stacks={stacks}
                handleChange={handleChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
            />
            <CVPreview />
        </main>
    );
};

export default Main;
