'use client';
import { useQueryAutomations } from '@/hooks/user-queries';
import React from 'react';

type Props = {};

const MetricsCard = (props: Props) => {
  const { data } = useQueryAutomations();
  const comments = data?.data.reduce((current, next) => {
    return current + next.listener?.commentCount!;
  }, 0);

  const dms = data?.data?.reduce((current, next) => {
    return current + next.listener?.dmCount!;
  }, 0);

  return (
    <div className="flex h-full flex-col items-end gap-5 lg:flex-row">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="flex w-full flex-col gap-y-20 rounded-xl border-[1px] p-5 lg:w-6/12"
        >
          {i === 1 ? (
            <div>
              <h2 className="text-3xl font-bold text-white">Comments</h2>
              <p className="text-sm text-text-secondary">On your posts</p>
            </div>
          ) : (
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white">Direct Messages</h2>
              <p className="text-sm text-text-secondary">On your account</p>
            </div>
          )}
          {i === 1 ? (
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-text-secondary">
                {comments} out of {comments} comments replied
              </p>
            </div>
          ) : (
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-text-secondary">
                {dms} out of {dms} DMs replied
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsCard;
