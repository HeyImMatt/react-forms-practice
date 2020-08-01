import React from 'react';

function UserInfo(user) {
  const { username, date, subscribe, ageCategory } = user;
  return (
    <div>
      <p>Username: {username}</p>
      <p>Date: {date}</p>
      <p>Subscribed?: {subscribe ? 'Yes' : 'No'}</p>
      <p>ageCategory: {ageCategory}</p>
    </div>
  )
}

export default UserInfo;