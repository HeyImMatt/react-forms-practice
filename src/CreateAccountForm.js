import React from 'react';

const CreateAccountForm = ({formData, changeHandler, submitHandler}) => {
  const {email, username, termsAgreement, accountType} = formData
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email-input">Email:</label>
      <input 
      type="email"
      id="email-input"
      name="email"
      value={email}
      onChange={changeHandler}
      />
      <label htmlFor="username-input">Username:</label>
      <input 
      type="text"
      id="username-input"
      name="username"
      value={username}
      onChange={changeHandler}
      />
      <label htmlFor="termsAgreement-input">Please read terms and agree:</label>
      <input 
      type="checkbox"
      id="termsAgreement-input"
      name="termsAgreement"
      checked={termsAgreement}
      onChange={changeHandler}
      />
      <label htmlFor="account-type-input">Select Account Type</label>
      <select 
      id="account-type-input"
      name="accountType" 
      value={accountType}
      onChange={changeHandler}>
        <option value="Super User">Super User</option>
        <option value="Normal User">Normal User</option>
        <option value="Restricted User">Restricted User</option>
      </select>
      <button>Submit</button>
    </form>
  )
}

export default CreateAccountForm;