import { Link } from 'gatsby';
import React from 'react';

export default function Blogs() {
  return (
    <div className="container-l">
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="text-center" style={{ width: '100%' }}>
          <h1>👋 COMING SOON!!!</h1>
          <br />
          <Link to="/" className="link">
            RETURN HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
