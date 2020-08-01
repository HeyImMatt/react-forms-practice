import React from 'react';

function UserSignupForm({ formData, changeHandler, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Enter Username:</label>
      <input
      type="text"
      id="username"
      name="username"
      value={formData.username}
      onChange={changeHandler}
      ></input>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserSignupForm;