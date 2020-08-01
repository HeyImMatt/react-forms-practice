import React, { useState } from 'react';

function FormOne() {
  const INITIAL_FORM_STATE = {
    username:'',
  }
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  }

  return (
    <>
      <form>
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