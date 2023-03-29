import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';

import Header from './Header';
import Info from './Info';
import Content from './Content';

import '../../assets/styles/CVPreview.css';

class CVPreview extends Component {
    render() {
        const { form } = this.props;

        return (
            <div className="preview-group">
                <div
                    className="preview"
                    ref={(refElement) => (this.componentRef = refElement)}
                >
                    <Header form={form} />
                    <Info form={form} />
                    <Content form={form} />
                </div>
                <ReactToPrint
                    trigger={() => {
                        return (
                            <button className="btn-print">Print to PDF</button>
                        );
                    }}
                    content={() => this.componentRef}
                />
            </div>
        );
    }
}

export default CVPreview;
