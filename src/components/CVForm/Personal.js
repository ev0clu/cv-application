import React from 'react';
import Input from '../Common/Input';
import Textarea from '../Common/Textarea';

const Personal = (props) => {
    const { personal, handleChange } = props;

    return (
        <div className="personal">
            <h1>Personal Information</h1>
            <Input
                className="input-fname"
                type="text"
                name="firstName"
                placeholder="First name"
                value={personal.firstName}
                handleChange={handleChange}
            />
            <Input
                className="input-lname"
                type="text"
                name="lastName"
                placeholder="Last name"
                value={personal.lastName}
                handleChange={handleChange}
            />
            <Input
                className="input-title"
                type="text"
                name="title"
                placeholder="Title"
                value={personal.title}
                handleChange={handleChange}
            />
            <Input
                className="input-address"
                type="text"
                name="address"
                placeholder="Address"
                value={personal.address}
                handleChange={handleChange}
            />
            <Input
                className="input-phone"
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={personal.phone}
                handleChange={handleChange}
            />
            <Input
                className="input-email"
                type="email"
                name="email"
                placeholder="Email address"
                value={personal.email}
                handleChange={handleChange}
            />
            <Input
                className="input-website"
                type="text"
                name="website"
                placeholder="Website address"
                value={personal.website}
                handleChange={handleChange}
            />
            <Input
                className="input-github"
                type="text"
                name="github"
                placeholder="Github address"
                value={personal.github}
                handleChange={handleChange}
            />
            <Textarea
                className="input-textarea"
                name="description"
                placeholder="Description"
                value={personal.description}
                handleChange={handleChange}
            />
        </div>
    );
};

export default Personal;
