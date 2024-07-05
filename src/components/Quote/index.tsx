import React, { CSSProperties } from 'react';

export enum QuoteVariant {
  Alert,
  Caution,
  Idea,
}

const containerClassNames: Record<QuoteVariant, string> = {
  [QuoteVariant.Alert]: 'border-yellow-200 dark:border-yellow-600 dark:bg-yellow-800 bg-yellow-50 text-yellow-600 dark:text-yellow-200',
  [QuoteVariant.Caution]: 'border-rose-200 dark:border-rose-600 dark:bg-rose-800 bg-rose-50 text-rose-600 dark:text-rose-200',
  [QuoteVariant.Idea]: 'border-green-200 dark:border-green-600 dark:bg-green-800 bg-green-50 text-green-600 dark:text-green-200',
}

export default function Quote({ children, variant }: {
  children: JSX.Element | JSX.Element[];
  variant: QuoteVariant;
}) {
  return (
    <article className={['my-6 p-2 rounded-md border-2 border-solid grid grid-cols-[3rem,auto]', containerClassNames[variant]].join(' ')}>
      <figure className='flex justify-center items-center col-start-1 col-end-1 h-8 w-8 m-0'>
        <svg
            viewBox="0 0 256 256"
            fill='currentColor'
        >
          <line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M136,56c20,3.37,36.61,20,40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </figure>
      <div className='idea-container flex flex-col justify-center p-0 m-0'>
        {children}
      </div>
    </article>
  );
}
