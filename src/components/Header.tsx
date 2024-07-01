import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-4">
      <div>
        <a className='m-0' href='/'>
          <img src="/img/infinyon-with-text.svg" height={24} />
        </a>
      </div>
      <a className='bg-purple-700 hover:bg-purple-800 text-white rounded-md border-0 px-4 py-2 text-md hover:text-white' target='_blank' href='https://infinyon.cloud/ui'>
        Login to InfinyOn Cloud
      </a>
    </header >
  );
}
