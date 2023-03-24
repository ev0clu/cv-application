import React from 'react';
import CVForm from './CVForm/CVForm';
import CVPreview from './CVPreview/CVPreview';

import '../assets/styles/Main.css';

const Main = () => {
    return (
        <main className="main">
            <CVForm />
            <CVPreview />
        </main>
    );
};

export default Main;
