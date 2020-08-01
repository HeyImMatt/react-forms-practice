import React, { useState } from 'react';
import UserSignupForm from './UserSignupForm';
import UserInfo from './UserInfo'

function UserSignup() {
  const INITIAL_FORM_DATA = {
    username: '',
    date: '',
    subscribe: false,
    ageCategory: '',
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [usersList, setUsersList] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUsersList((uList) => [...uList, formData])
  }

  return (
  <>
    <h2>User Signup</h2>
    <UserSignupForm 
    formData={formData} 
    changeHandler={changeHandler} 
    submitHandler={submitHandler} />

    <h4>Current Users:</h4>
    {usersList.map((user) => <UserInfo user={user} />)}
  </>
  );
}

export default UserSignup;
