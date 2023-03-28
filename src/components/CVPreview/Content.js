import React from 'react';

const Content = (props) => {
    const { form } = props;

    return (
        <div className="preview-content">
            <h1>Stacks</h1>
            <div className="preview-stack">
                {form.stack.map((element, index) => {
                    return (
                        <div
                            key={element.id}
                            className="preview-stack-item"
                            data-index={index}
                        >
                            {element.stack}
                        </div>
                    );
                })}
            </div>
            <h1>Experience</h1>
            <div className="preview-experience">
                {form.experience.map((element, index) => {
                    return (
                        <div
                            key={element.id}
                            className="preview-experience-item"
                            data-index={index}
                        >
                            <div className="preview-experience-date">
                                {element.from}
                                {' - '}
                                {element.to}
                            </div>
                            <div className="preview-experience-info">
                                <div className="preview-experience-position">
                                    {element.position}
                                </div>
                                {element.company}
                                {'; '}
                                {element.city}
                            </div>
                        </div>
                    );
                })}
            </div>
            <h1>Education</h1>
            <div className="preview-education">
                {form.education.map((element, index) => {
                    return (
                        <div
                            key={element.id}
                            className="preview-education-item"
                            data-index={index}
                        >
                            <div className="preview-education-date">
                                {element.from}
                                {' - '}
                                {element.to}
                            </div>
                            <div className="preview-education-info">
                                <div className="preview-education-university">
                                    {element.university} {'; '}
                                    {element.location}
                                </div>
                                {element.degree}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Content;
