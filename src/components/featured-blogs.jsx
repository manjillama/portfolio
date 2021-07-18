import React from 'react';
import { Link } from 'gatsby';
import solidImg from '../images/solid.png';
import deployNodejsImg from '../images/nodejs-deploy.jpg';

export default function FeaturedBlog({ limit }) {
  return (
    <div className="featured-blogs">
      <div className="row twin-cols">
        <div className="col">
          <Link to="/blogs/solid-design-principles">
            <div className="item-img">
              <div className="img-wrapper">
                <img src={solidImg} className="img-cover" />
              </div>
            </div>
            <p className="item-title">SOLID Design Principles</p>
            <p className="summary hint-text">
              SOLID is one of the most popular sets of design principles in object-oriented software development.
            </p>
            <div className="hint-text sub">July 2, 2021 • 12 min read</div>
          </Link>
        </div>

        <div className="col">
          <Link to="/blogs/deploy-nodejs-to-ubuntu">
            <div className="item-img">
              <div className="img-wrapper">
                <img src={deployNodejsImg} className="img-cover" />
              </div>
            </div>
            <p className="item-title">Deploy Node.js app to Ubuntu - Server setup, Nginx, SSL</p>
            <p className="summary hint-text">
              Initial Server Setup with Ubuntu 18.04 After creating a new Ubuntu 18.04 server, you should take some
              configuration steps as part of an initial server setup in order to increase security and facilitate
              management later.
            </p>
            <div className="hint-text sub">July 4, 2021 • 12 min read</div>
          </Link>
        </div>
        {/* {!limit && (
          <>
            <div className="col">
              <Link to="/blogs/solid-design-principles">
                <div className="item-img">
                  <div className="img-wrapper">
                    <img
                      src={
                        'https://manjiltamang-threadly.s3.ap-south-1.amazonaws.com/1_u4T0JFUaAT67GiT7N0l5driQQUcTHWpl.jpg'
                      }
                      className="img-cover"
                    />
                  </div>
                </div>
                <p className="summary hint-text">
                  SOLI D is one of the most popular sets of design principles in object-oriented software development.
                  It’s a mnemonic acronym for the following five design principles:
                </p>
                <div className="hint-text sub">July 2, 2021 • 8 min read</div>
              </Link>
            </div>

            <div className="col">
              <Link to="/blogs/solid-design-principles">
                <div className="item-img">
                  <div className="img-wrapper">
                    <img src={'https://miro.medium.com/max/700/0*t8mbPQ-YHz4qjWFl'} className="img-cover" />
                  </div>
                </div>
                <p className="summary hint-text">
                  SOLID is one of the most popular sets of design principles in object-oriented software development.
                  It’s a mnemonic acronym for the following five design principles:SOLID is one of the most popular sets
                  of design principles in object-oriented software development. It’s a mnemonic acronym for the
                  following five design prin ciples:
                </p>
                <div className="hint-text sub">July 2, 2021 • 8 min read</div>
              </Link>
            </div>
          </>
        )} */}
      </div>
    </div>
  );
}
