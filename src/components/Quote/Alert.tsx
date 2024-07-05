import React from 'react';
import Quote, { QuoteVariant } from '.';

export default function Alert({ variant, ...props }: {
  children: JSX.Element | JSX.Element[];
  variant: QuoteVariant;
}) {
  return (
    <Quote variant={QuoteVariant.Alert} {...props}  />
  );
}
