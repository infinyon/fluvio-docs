import React, { CSSProperties } from 'react';

export enum QuoteVariant {
  Alert,
  Caution,
  Idea,
}

const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="currentColor"
  >
    <path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 00-42.7 0L19.2 188.09a23.51 23.51 0 000 23.72A24.35 24.35 0 0040.55 224h174.9a24.35 24.35 0 0021.33-12.19 23.51 23.51 0 00.02-23.72zm-13.87 15.71a8.5 8.5 0 01-7.48 4.2H40.55a8.5 8.5 0 01-7.48-4.2 7.59 7.59 0 010-7.72l87.45-151.87a8.75 8.75 0 0115 0l87.45 151.87a7.59 7.59 0 01-.04 7.72zM120 144v-40a8 8 0 0116 0v40a8 8 0 01-16 0zm20 36a12 12 0 11-12-12 12 12 0 0112 12z"></path>
  </svg>
);

const IdeaIcon = () => (
  <svg
    viewBox="0 0 256 256"
    fill='currentColor'
  >
    <line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M136,56c20,3.37,36.61,20,40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
  </svg>
);

const WarningOctagonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="currentColor"
  >
    <path d="M120 136V80a8 8 0 0116 0v56a8 8 0 01-16 0zm112-44.45v72.9a15.86 15.86 0 01-4.69 11.31l-51.55 51.55a15.86 15.86 0 01-11.31 4.69h-72.9a15.86 15.86 0 01-11.31-4.69l-51.55-51.55A15.86 15.86 0 0124 164.45v-72.9a15.86 15.86 0 014.69-11.31l51.55-51.55A15.86 15.86 0 0191.55 24h72.9a15.86 15.86 0 0111.31 4.69l51.55 51.55A15.86 15.86 0 01232 91.55zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45zM128 160a12 12 0 1012 12 12 12 0 00-12-12z"></path>
  </svg>
);

const containerClassNames: Record<QuoteVariant, string> = {
  [QuoteVariant.Alert]: 'border-yellow-200 dark:border-yellow-600 dark:bg-yellow-800 bg-yellow-50 text-yellow-600 dark:text-yellow-200',
  [QuoteVariant.Caution]: 'border-rose-200 dark:border-rose-600 dark:bg-rose-800 bg-rose-50 text-rose-600 dark:text-rose-200',
  [QuoteVariant.Idea]: 'border-green-200 dark:border-green-600 dark:bg-green-800 bg-green-50 text-green-600 dark:text-green-200',
}

const containerIcon: Record<QuoteVariant, JSX.Element> = {
  [QuoteVariant.Alert]: <AlertIcon />,
  [QuoteVariant.Caution]: <WarningOctagonIcon />,
  [QuoteVariant.Idea]: <IdeaIcon />
}

export default function Quote({ children, variant }: {
  children: JSX.Element | JSX.Element[];
  variant: QuoteVariant;
}) {
  return (
    <article className={['my-6 p-2 rounded-md border-2 border-solid grid grid-cols-[3rem,auto]', containerClassNames[variant]].join(' ')}>
      <figure className='flex justify-center items-center col-start-1 col-end-1 h-8 w-8 m-0'>
        {containerIcon[variant]}
      </figure>
      <div className='idea-container flex flex-col justify-center p-0 m-0'>
        {children}
      </div>
    </article>
  );
}
