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
      <br />
      <label htmlFor="date">Date:</label>
      <input
      type="date"
      id="date"
      name="date"
      value={date}
      onChange={changeHandler}
      />
      <br />
      <label htmlFor="subscribe">Subscribe to newsletter?</label>
      <input
      type="checkbox"
      id="subscribe"
      name="subscribe"
      checked={subscribe}
      onChange={changeHandler}
      />
      <br/>
      <label htmlFor="ageCategory">Select Age Group:</label>
      <select id="ageCategory" name="ageCategory" value={ageCategory} onChange={changeHandler}>
        <option value="" disabled hidden>Age...</option>
        <option value="18-29">18-29</option>
        <option value="30-39">30-39</option>
        <option value="40-49">40-49</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserSignupForm;