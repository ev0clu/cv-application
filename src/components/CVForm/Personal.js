import React from 'react';
import Input from '../Common/Input';
import Textarea from '../Common/Textarea';

const Personal = () => {
    return (
        <div className="personal">
            <h1>Personal Information</h1>
            <Input
                className="input-fname"
                type="text"
                name="fname"
                placeholder="First name"
            />
            <Input
                className="input-lname"
                type="text"
                name="lname"
                placeholder="Last name"
            />
            <Input
                className="input-title"
                type="text"
                name="title"
                placeholder="Title"
            />
            <Input
                className="input-address"
                type="text"
                name="address"
                placeholder="Address"
            />
            <Input
                className="input-phone"
                type="tel"
                name="phone"
                placeholder="Phone number"
            />
            <Input
                className="input-email"
                type="email"
                name="email"
                placeholder="Email address"
            />
            <Input
                className="input-website"
                type="text"
                name="website"
                placeholder="Website address"
            />
            <Input
                className="input-github"
                type="text"
                name="github"
                placeholder="Github address"
            />
            <Textarea
                className="input-textarea"
                name="textarea"
                placeholder="Description"
            />
        </div>
    );
};

export default Personal;
