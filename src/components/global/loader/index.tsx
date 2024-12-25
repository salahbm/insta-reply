import React from 'react';

import { Spinner } from './spinner';

import { cn } from '@/lib/utils';

type Props = {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
};

const Loader = ({
  children,
  state,
  className,
  color,
}: Props): JSX.Element | React.ReactNode => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
