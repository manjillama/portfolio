import React from 'react';
import { Link } from 'gatsby';
import featuredImage from '../images/solid.png';

export default function FeaturedBlog({ limit }) {
  return (
    <div className="featured-blogs">
      <div className="row twin-cols">
        <div className="col">
          <Link to="/blogs/solid-design-principles">
            <div className="item-img">
              <div className="img-wrapper">
                <img src={featuredImage} className="img-cover" />
              </div>
            </div>
            <p className="summary hint-text">
              SOLID is one of the most popular sets of design principles in object-oriented software development.
            </p>
            <div className="hint-text sub">July 2, 2021 • 4 min read</div>
          </Link>
        </div>

        <div className="col">
          <Link to="/blogs/solid-design-principles">
            <div className="item-img">
              <div className="img-wrapper">
                <img
                  src={
                    'https://manjiltamang-threadly.s3.ap-south-1.amazonaws.com/1_8pxeDa9e4AIMCBYs8bfiod7Mxt5aHiti.jpg'
                  }
                  className="img-cover"
                />
              </div>
            </div>
            <p className="summary hint-text">
              SOLI D is one of the most popular sets of design principles in object-oriented software development. It’s
              a mnemonic acronym for the following five design principles:
            </p>
            <div className="hint-text sub">July 2, 2021 • 4 min read</div>
          </Link>
        </div>
        {!limit && (
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
                <div className="hint-text sub">July 2, 2021 • 4 min read</div>
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
                <div className="hint-text sub">July 2, 2021 • 4 min read</div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
