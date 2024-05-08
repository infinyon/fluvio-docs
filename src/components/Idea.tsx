import React, { CSSProperties } from 'react';

export default function Idea({ children }) {
  const style: CSSProperties = {
    backgroundColor: '#F2FDF5',
    padding: '.5rem',
    display: 'grid',
    border: '1px solid #63C46E',
    borderRadius: '.4rem',
    margin: '1rem 0',
    gridTemplateColumns: '3rem auto',
  };

  return (
    <article style={style}>
      <figure style={{
        height: '2rem',
        width: '2rem',
        color: '#63C46E',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridColumnStart: 1,
        gridColumnEnd: 1,
      }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
        >
          <line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,56c20,3.37,36.61,20,40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </figure>
      <p style={{
        color: '#63C46E',
        gridColumnStart: 2,
        gridColumnEnd: 2,
      }}>
        {children}
      </p>
    </article>
  );
}
