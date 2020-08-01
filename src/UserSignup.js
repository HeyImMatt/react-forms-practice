import React, { useState } from 'react';
import UserSignupForm from './UserSignupForm';

function UserSignup() {
  const INITIAL_FORM_DATA = {
    username: '',
    date: '',
    subscribe: false,
    ageCategory: '',
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return <UserSignupForm formData={formData} onChange={changeHandler} />;
}

export default UserSignup;
