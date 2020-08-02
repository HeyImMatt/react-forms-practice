import React from 'react';

function UserInfo({ user }) {
  const { username, date, subscribe, ageCategory, idx } = user;
  return (
    <div key={idx}>
      <p>Username: {username}</p>
      <p>Date: {date}</p>
      <p>Subscribed? {subscribe ? 'Yes' : 'No'}</p>
      <p>Age Category: {ageCategory}</p>
    </div>
  )
}

export default UserInfo;