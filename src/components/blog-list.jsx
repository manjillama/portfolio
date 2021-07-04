import React from 'react';

export default function BlogList() {
  return (
    <div className="blogs">
      <div className="card">
        <div className="card-left">
          <h2>SOLID Design Principles SOLID Design Principles</h2>
          <p className="summary hint-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima rem quae asperiores optio est illum
            nihil dolore maxime in quas beatae, ipsam molestiae dolorum, fugiat possimus assumenda nobis rerum!
          </p>
          <div className="hint-text sub">July 2, 2021 • 4 min read</div>
        </div>
        <div className="card-right">
          <div>
            <img src={'https://miro.medium.com/max/700/0*t8mbPQ-YHz4qjWFl'} className="img-cover" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-left">
          <h2>SOLID Design Principles</h2>
          <p className="summary hint-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima rem quae asperiores optio est illum
            nihil dolore maxime in quas beatae, ipsam molestiae dolorum, fugiat possimus assumenda nobis rerum!
          </p>{' '}
          <div className="hint-text sub">July 2, 2021 • 4 min read</div>
        </div>
        <div className="card-right">
          <div>
            <img src={'https://miro.medium.com/max/700/0*t8mbPQ-YHz4qjWFl'} className="img-cover" />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-left">
          <h2>SOLID Design Principles</h2>
          <p className="summary hint-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima rem quae asperiores optio est illum
            nihil dolore maxime in quas beatae, ipsam molestiae dolorum, fugiat possimus assumenda nobis rerum!
          </p>{' '}
          <div className="hint-text sub">July 2, 2021 • 4 min read</div>
        </div>
        <div className="card-right">
          <div>
            <img src={'https://miro.medium.com/max/700/0*t8mbPQ-YHz4qjWFl'} className="img-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
