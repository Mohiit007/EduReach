import React from 'react';

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
