import React from 'react';

import Loader from '@/components/global/loader';
type Props = {};

const Loading = (_props: Props): JSX.Element => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader state>...Loading</Loader>
    </div>
  );
};

export default Loading;
