import React from 'react';

export default function SearchOverlay({ handleIsSearchOverlayOpened }) {
  return (
    <div
      className="search-overlay"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: 'rgba(255,255,255,.95)',
        zIndex: 1010,
        overflow: 'auto',
        height: '100vh'
      }}
    >
      <div className="container-l" style={{ height: '100%', position: 'relative' }}>
        <button
          onClick={() => handleIsSearchOverlayOpened(false)}
          className="btn-chromeless"
          style={{ position: 'absolute', opacity: 0.5, fontSize: '1.2rem', top: '1.2rem', right: '1rem' }}
        >
          <i className="fas fa-times"></i>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
          <form>
            <input
              autoComplete="off"
              placeholder="Search..."
              autoFocus
              style={{
                color: '#626262',
                border: 0,
                background: 'inherit',
                fontWeight: 300,
                fontSize: '4rem',
                width: '100%',
                height: 120,
                letterSpacing: '-1.925px'
              }}
            />
          </form>
        </div>
        <p style={{ position: 'absolute', opacity: 0.7, bottom: '1.2rem', left: '1rem' }}>
          <small>
            <i className="fas fa-search"></i> Press enter to search
          </small>
        </p>
      </div>
    </div>
  );
}
