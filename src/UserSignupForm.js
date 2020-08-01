import React from 'react';

function UserSignupForm({ formData, changeHandler, submitHandler }) {
  const { username, date, subscribe, ageCategory } = formData;
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Enter Username:</label>
      <input
      type="text"
      id="username"
      name="username"
      value={username}
      onChange={changeHandler}
      />

      <label htmlFor="date">Date:</label>
      <input
      type="date"
      id="date"
      name="date"
      value={date}
      onChange={changeHandler}
      />

      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserSignupForm;