import React, { useState } from 'react';
import CreateAccountForm from './CreateAccountForm'

const FormPage = () => {
  const INITIAL_FORM_STATE = {
    email:'',
    username: '',
    termsAgreement: false,
    accountType: 'Super User'
  }
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const changeHandler = (e) => {
    let {name, value} = e.target;
    if (name === 'termsAgreement') {
      value = e.target.checked
    }
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData)
    setFormData(INITIAL_FORM_STATE);
  }

  return (
    <CreateAccountForm formData={formData} 
    changeHandler={changeHandler} submitHandler={submitHandler}/>
  )
}

export default FormPage;