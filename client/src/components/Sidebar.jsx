import React from 'react';

export default function Sidebar({ children }) {
  return (
    <aside style={{ width: 240, padding: 16, borderRight: '1px solid #eee' }}>
      {children || <div>Sidebar</div>}
    </aside>
  );
}
