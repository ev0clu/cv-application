import React from 'react';

import Header from './Header';
import Info from './Info';
import Content from './Content';

import '../../assets/styles/CVPreview.css';

const CVPreview = (props) => {
    const { form } = props;

    return (
        <div className="preview">
            <Header form={form} />
            <Info form={form} />
            <Content form={form} />
        </div>
    );
};

export default CVPreview;
