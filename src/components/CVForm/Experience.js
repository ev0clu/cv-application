import React from 'react';
import Input from '../Common/Input';

const Experience = () => {
    return (
        <div className="experience">
            <h1>Experience</h1>
            <Input
                className="input-position"
                type="text"
                name="position"
                placeholder="Position"
            />
            <Input
                className="input-company"
                type="text"
                name="company"
                placeholder="Company"
            />
            <Input
                className="input-city"
                type="text"
                name="city"
                placeholder="City"
            />
            <Input
                className="input-from"
                type="text"
                name="from"
                placeholder="From"
            />
            <Input
                className="input-to"
                type="tel"
                name="to"
                placeholder="To"
            />
        </div>
    );
};

export default Experience;
