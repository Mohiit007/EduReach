import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '16px 20px', borderTop: '1px solid #eee', marginTop: 24 }}>
      <small>© {new Date().getFullYear()} EduReach. All rights reserved.</small>
    </footer>
  );
}
