import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
