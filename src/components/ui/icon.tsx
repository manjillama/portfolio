import React from 'react';

type Props = { name?: 'arrow-up-right' | 'asterisk' };

/** Decorative SVGs avoid platform-dependent emoji substitution. */
export default function Icon({ name = 'arrow-up-right' }: Props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ display: 'inline-block', verticalAlign: '-0.125em', flexShrink: 0 }}>
      {name === 'asterisk' ? <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36 18.36 5.64" /> : <path d="M6 18 18 6M6 6h12v12" />}
    </svg>
  );
}
