import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ handleIsNavMobileOpened, handleIsSearchOverlayOpened }) {
  return (
    <div className="navbar">
      <nav className="nav">
        <div>
          <Link to="/">
            <img src="/images/logo.png" height="15" />
          </Link>
        </div>
        <ul className="nav-right list-inline list-neutralize">
          <li>
            <Link
              to="/"
              activeStyle={{
                opacity: 1
              }}
            >
              Home <span>Welcome</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              Blog <span>Personal</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleIsSearchOverlayOpened(true)}
              className="btn btn-chromeless"
              style={{ opacity: 1, fontSize: '1.1rem' }}
            >
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
        <ul className="nav-right-md list-inline list-neutralize">
          <li>
            <button
              onClick={() => handleIsSearchOverlayOpened(true)}
              className="btn btn-chromeless"
              style={{ opacity: 1, fontSize: '1.1rem', marginRight: '1.2rem' }}
            >
              <i className="fas fa-search"></i>
            </button>
          </li>
          <li>
            <button onClick={() => handleIsNavMobileOpened(true)} className="btn-chromeless menu-toggler">
              <div className="one" />
              <div className="two" />
              <div className="three" style={{ marginBottom: 0 }} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
