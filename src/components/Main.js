import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

import '../assets/styles/Main.css';

const Main = (props) => {
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
        <main className="main">
            <CVForm
                form={form}
                handlePersonalInfoChange={handlePersonalInfoChange}
                handleGeneralInfoChange={handleGeneralInfoChange}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
                handleExampleClick={handleExampleClick}
                handleResetClick={handleResetClick}
            />
            <CVPreview form={form} />
        </main>
    );
};

export default Main;
