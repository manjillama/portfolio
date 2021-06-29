import React from 'react';
import { Link } from 'gatsby';

export default function NavMobile({ isNavMobileOpened, handleIsNavMobileOpened }) {
  return (
    <div className={isNavMobileOpened ? 'navbar-mobile opened' : 'navbar-mobile'}>
      <nav className="nav">
        <div>
          <button
            onClick={() => handleIsNavMobileOpened(false)}
            className="btn-chromeless hint-text"
            style={{ float: 'right', padding: 15, margin: '6px 0' }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="list-neutralize">
          <li>
            <Link
              to="/"
              activeStyle={{
                opacity: 1,
                background: '#000',
                color: '#fff'
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
        </ul>
        <p style={{ opacity: 0.5, padding: '15px', letterSpacing: 0 }}>
          <small>
            Copyright &copy; <strong>Manjil Tamang</strong>, {new Date().getFullYear()}. All Rights Reserved.
          </small>
        </p>
      </nav>
    </div>
  );
}
