import React from 'react';

import { IoLocationOutline } from 'react-icons/io5';
import { GiSmartphone } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const Info = (props) => {
    const { form } = props;

    return (
        <div className="preview-info">
            <div className="preview-info-line1">
                <div className="preview-location p-item">
                    <IoLocationOutline />
                    {form.location}
                </div>
                <div className="preview-phone p-item">
                    <GiSmartphone />
                    {form.phone}
                </div>
            </div>
            <div className="preview-info-line2">
                <div className="preview-email p-item">
                    <AiOutlineMail />
                    {form.email}
                </div>
                <div className="preview-website p-item">
                    <TbWorldWww />
                    {form.website}
                </div>
            </div>
            <div className="preview-info-line3">
                <div className="preview-github p-item">
                    <FaGithub />
                    {form.github}
                </div>
            </div>
        </div>
    );
};

export default Info;
