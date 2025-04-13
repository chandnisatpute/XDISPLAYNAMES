
import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName.trim()} ${lastName.trim()}`);
    }
  };

  return (
    <div className="container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p className="output">Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
