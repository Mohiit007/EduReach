import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '12px 20px', borderBottom: '1px solid #eee' }}>
      <strong>EduReach</strong>
      <span style={{ marginLeft: 16 }}>
        <Link to="/">Home</Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link to="/about">About</Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link to="/features">Features</Link>
        <span style={{ margin: '0 8px' }}>|</span>
        <Link to="/faqs">FAQs</Link>
      </span>
    </nav>
  );
}
