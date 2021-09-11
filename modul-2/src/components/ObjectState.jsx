import { useState } from 'react';

const ObjectState = () => {
  const [user, setUser] = useState({
    name: 'RPL',
    isAuthenticated: true,
  });

  const handleClick = () => {
    setUser({
      ...user,
      isAuthenticated: false,
    });
  };

  return (
    <div>
      <p>First Name: {user.name}</p>
      <p>Authenticated: {JSON.stringify(user.isAuthenticated)}</p>
      <button onClick={handleClick} style={{ marginBottom: '1rem' }}>
        Logout
      </button>
    </div>
  );
};

export default ObjectState;
