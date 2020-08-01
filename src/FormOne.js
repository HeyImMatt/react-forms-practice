import React, { useState } from 'react';

function FormOne() {
  const INITIAL_FORM_STATE = {
    username:'',
  }
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [users, setUsers] = useState([]);

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setUsers((oldUsers) => [...oldUsers, formData])
    setFormData(INITIAL_FORM_STATE)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="usernameInput">Username:</label>
        <input 
        type="text" 
        id="usernameInput" 
        name="username"
        value={formData.username}
        onChange={changeHandler} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default FormOne