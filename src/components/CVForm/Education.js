import React from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';

const Education = (props) => {
    const { educations, handleChange, handleAddClick, handleDeleteClick } =
        props;

    return (
        <div className="education">
            <h1>Education</h1>
            {educations.map((education, index) => {
                return (
                    <div
                        key={education.id}
                        className="education-group"
                        data-index={index}
                    >
                        <Input
                            className="input-university"
                            type="text"
                            name="university"
                            placeholder="University"
                            value={education.university}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-location"
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={education.location}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-degree"
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={education.degree}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-from"
                            type="text"
                            name="from"
                            placeholder="From"
                            value={education.from}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-to"
                            type="tel"
                            name="to"
                            placeholder="To"
                            value={education.to}
                            handleChange={handleChange}
                        />
                        <Button
                            className="btn-experience-delete"
                            text="Delete"
                            handleClick={handleDeleteClick}
                        />
                    </div>
                );
            })}
            <Button
                className="btn-experience-add"
                text="Add"
                handleClick={handleAddClick}
            />
        </div>
    );
};

export default Education;
