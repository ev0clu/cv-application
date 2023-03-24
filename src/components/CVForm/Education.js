import React from 'react';
import Input from '../Common/Input';

const Education = () => {
  return (
    <div className="education">
      <h1>Education</h1>
      <Input className="input-university" type="text" name="university" placeholder="University" />
      <Input className="input-location" type="text" name="location" placeholder="Location" />
      <Input className="input-degree" type="text" name="degree" placeholder="Degree" />
      <Input className="input-from" type="text" name="from" placeholder="From" />
      <Input className="input-to" type="tel" name="to" placeholder="To" />
    </div>
  );
};

export default Education;
