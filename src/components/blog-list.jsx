import React from 'react';
import { Link } from 'gatsby';
import solidImg from '../images/solid.png';
import deployNodejsImg from '../images/nodejs-deploy.jpg';

export default function BlogList() {
  return (
    <div className="blogs">
      <Link to="/blogs/solid-design-principles" className="card">
        <div className="card-left">
          <h2>SOLID Design Principles</h2>
          <p className="summary hint-text">
            SOLID is one of the most popular sets of design principles in object-oriented software development. It’s a
            mnemonic acronym for the following five design principles:
          </p>
          <div className="hint-text sub">July 2, 2021 • 4 min read</div>
        </div>
        <div className="card-right">
          <div>
            <img src={solidImg} className="img-cover" />
          </div>
        </div>
      </Link>

      <Link to="/blogs/deploy-nodejs-to-ubuntu" className="card">
        <div className="card-left">
          <h2>Deploy Node.js app to Ubuntu - Server setup, Nginx, SSL</h2>
          <p className="summary hint-text">
            Initial Server Setup with Ubuntu 18.04 After creating a new Ubuntu 18.04 server, you should take some
            configuration steps as part of an initial server setup in order to increase security and facilitate
            management later.
          </p>
          <div className="hint-text sub">July 4, 2021 • 9 min read</div>
        </div>
        <div className="card-right">
          <div>
            <img src={deployNodejsImg} className="img-cover" />
          </div>
        </div>
      </Link>
    </div>
  );
}
