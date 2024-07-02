import React from 'react';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #ddd' }} className="dark:!border-transparent flex justify-between items-center py-2 px-4">
      <a className='h-full flex flex-col justify-center items-center' href='https://infinyon.com' target='_blank'>
        <img src="/img/infinyon-with-text.svg" className='dark:hidden' height={24} />
        <img src="/img/infinyon-with-text-white.svg" className='hidden dark:inline-block' height={24} />
      </a>
      <a className="btn btn-secondary" target='_blank' href='https://infinyon.cloud/ui'>
        Login to InfinyOn Cloud
      </a>
    </header >
  );
}
