import React from 'react';
import Quote, { QuoteVariant } from '.';

export default function Caution({ variant, ...props }: {
  children: JSX.Element | JSX.Element[];
  variant: QuoteVariant;
}) {
  return (
    <Quote variant={QuoteVariant.Caution} {...props}  />
  );
}
