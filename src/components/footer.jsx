import React from 'react';
import Newsletter from './newsletter';

export default function Footer() {
  return (
    <footer className="text-center">
      <Newsletter />

      <ul className="list-neutralize list-inline socials">
        <li>
          <a href="https://bit.ly/2YV19z0" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-behance"></i>
          </a>
        </li>
        <li>
          <a href="https://bit.ly/2JN69OO" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li>
          <a href="https://twitter.com/lamamanjil" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://bit.ly/2EYmxJV" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:lamamanjil@gmail.com" rel="noopener noreferrer" target="_blank">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
      <p>Get in touch.</p>
    </footer>
  );
}
