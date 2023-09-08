import React from 'react';
import Seo from './seo';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

export const Head = () => <Seo />;
