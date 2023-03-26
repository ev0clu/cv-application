import React from 'react';
import Input from '../Common/Input';
import Button from '../Common/Button';

const Experience = (props) => {
    const { experiences, handleChange, handleAddClick, handleDeleteClick } =
        props;

    return (
        <div className="experience">
            <h1>Experience</h1>
            {experiences.map((experience, index) => {
                return (
                    <div
                        key={experience.id}
                        className="experience-group"
                        data-index={index}
                    >
                        <Input
                            className="input-position"
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={experience.position}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-company"
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={experience.company}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-city"
                            type="text"
                            name="city"
                            placeholder="City"
                            value={experience.city}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-from"
                            type="text"
                            name="from"
                            placeholder="From"
                            value={experience.from}
                            handleChange={handleChange}
                        />
                        <Input
                            className="input-to"
                            type="tel"
                            name="to"
                            placeholder="To"
                            value={experience.to}
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

export default Experience;
