import React, { CSSProperties } from 'react';

export default function Alert({ children, title  }) {
  const style: CSSProperties = {
    backgroundColor: '#fffbeb',
    padding: '.5rem',
    display: 'grid',
    border: '1px solid #f59e0b',
    borderRadius: '.4rem',
    margin: '1rem 0',
    gridTemplateColumns: '3rem auto',
  };

  return (
    <article style={style}>
      <figure style={{
        height: '2rem',
        width: '2rem',
        color: '#b27956',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridColumnStart: 1,
        gridColumnEnd: 1,
      }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#b27956"
            viewBox="0 0 256 256"
        >
          <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path>
        </svg>
      </figure>
      {title ? <strong style={{
        color: '#b27956',
        margin: 0,
        gridColumnStart: 2,
        gridColumnEnd: 2,
        textTransform: 'uppercase',
      }}>{title}</strong> : null}
      <p style={{
        color: '#b27956',
        margin: 0,
        gridColumnStart: 2,
        gridColumnEnd: 2,
      }}>
        {children}
      </p>
    </article>
  );
}
