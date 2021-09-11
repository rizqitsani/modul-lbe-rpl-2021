import { useState } from 'react';

const FormHandling = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(username);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={username} onChange={handleUsernameChange} />
        <button type='submit'>Submit</button>
      </form>
      <p>Username: {username}</p>
    </div>
  );
};

export default FormHandling;
