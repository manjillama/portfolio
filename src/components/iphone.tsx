import Icon from './ui/icon';
import React from 'react';

export default function IPhone() {
  return (
    <figure className="personal-phone">
      <div className="personal-phone-frame">
        <span className="personal-phone-speaker" aria-hidden="true" />
        <img src="/images/me-1.jpg" alt="Manjil looking out over the clouds at sunrise on Mount Batur, Bali" loading="lazy" />
        <span className="personal-phone-location">Mount Batur, Bali · 2022</span>
        <span className="personal-phone-home" aria-hidden="true" />
      </div>
      <figcaption>A little above the clouds. <Icon /></figcaption>
    </figure>
  );
}
