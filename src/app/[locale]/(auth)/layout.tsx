import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex h-screen items-center justify-center">{children}</div>
  );
};

export default Layout;
