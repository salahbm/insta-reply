import Loader from '@/components/global/loader';
import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader state>...Loading</Loader>
    </div>
  );
};

export default Loading;
