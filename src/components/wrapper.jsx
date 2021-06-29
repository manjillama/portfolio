import React from 'react';
import Navbar from './navbar';

export default function Wrapper({ children }) {
  return (
    <main style={{ marginTop: -70, position: 'relative' }}>
      <Navbar />
      {children}
    </main>
  );
}
