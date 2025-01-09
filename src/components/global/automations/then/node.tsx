'use client';
import { Separator } from '@/components/ui/separator';
import { useQueryAutomation } from '@/hooks/user-queries';
import { PlaneBlue, SmartAi, Warning } from '@/icons';
import React from 'react';
import PostButton from '../post';

type Props = {
  id: string;
};

const ThenNode = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const commentTrigger = data?.data?.trigger.find((t) => t.type === 'COMMENT');

  return !data?.data?.listener ? (
    <></>
  ) : (
    <div className="relative flex w-full flex-col gap-y-3 rounded-xl bg-[#1D1D1D] p-5 lg:w-10/12 xl:w-6/12">
      <div className="absolute bottom-full left-1/2 z-50 flex h-20 flex-col items-center">
        <span className="h-[9px] w-[9px] rounded-full bg-connector/10" />
        <Separator
          orientation="vertical"
          className="bottom-full flex-1 border-[1px] border-connector/10"
        />
        <span className="h-[9px] w-[9px] rounded-full bg-connector/10" />
      </div>
      <div className="flex gap-x-2">
        <Warning />
        Then...
      </div>
      <div className="flex flex-col gap-y-2 rounded-xl bg-background-80 p-3">
        <div className="flex items-center gap-x-2">
          {data.data.listener.listener === 'MESSAGE' ? (
            <PlaneBlue />
          ) : (
            <SmartAi />
          )}
          <p className="text-lg">
            {data.data.listener.listener === 'MESSAGE'
              ? 'Send the user a message.'
              : 'Let Smart AI take over'}
          </p>
        </div>
        <p className="flont-light text-text-secondary">
          {data.data.listener.prompt}
        </p>
      </div>
      {data.data.posts.length > 0 ? (
        <></>
      ) : commentTrigger ? (
        <PostButton id={id} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ThenNode;
