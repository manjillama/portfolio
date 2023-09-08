import React from 'react';
import { Link, navigate } from 'gatsby';

export default function BlogNavbar() {
  return (
    <nav style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 12px 0px', padding: '1.2rem 0' }}>
      <div className="container mx-auto px-[15px] flex items-center">
        <Link to="/" className="group mr-5">
          <img src="/images/logo-circle-mini.png" alt="logo" className="h-[30px]" />
        </Link>
        <button onClick={() => navigate(-1)} className="group" style={{ fontWeight: 600 }}>
          <span className="text-sm group-hover:text-primary-regular">
            <i className="fas fa-long-arrow-alt-left transition group-hover:-translate-x-1.5"></i>&nbsp; BACK
          </span>
        </button>
      </div>
    </nav>
  );
}
