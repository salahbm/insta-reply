'use client';
import { usePaths } from '@/hooks/user-nav';
import { cn, getMonth } from '@/lib/utils';
import Link from 'next/link';
import React, { useMemo } from 'react';
import GradientButton from '../gradient-button';
import { Button } from '@/components/ui/button';
import { useQueryAutomations } from '@/hooks/user-queries';
import CreateAutomation from '../create-automation';
import { useMutationDataState } from '@/hooks/use-mutation-data';

type Props = {};

const AutomationList = (props: Props) => {
  const { data } = useQueryAutomations();

  const { latestVariable } = useMutationDataState(['create-automation']);
  console.log(latestVariable);
  const { pathname } = usePaths();

  const optimisticUiData = useMemo(() => {
    if (latestVariable && latestVariable?.variables && data) {
      const test = [latestVariable.variables, ...data.data];
      return { data: test };
    }
    return data || { data: [] };
  }, [latestVariable, data]);

  if (data?.status !== 200 || data.data.length <= 0) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center gap-y-3">
        <h3 className="text-lg text-gray-400">No Automations </h3>
        <CreateAutomation />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      {optimisticUiData.data!.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="radial--gradient--automations flex rounded-xl border-[1px] border-[#545454] bg-[#1D1D1D] p-5 transition duration-100 hover:opacity-80"
        >
          <div className="flex flex-1 flex-col items-start">
            <h2 className="text-xl font-semibold">{automation.name}</h2>
            <p className="mb-2 text-sm font-light text-[#9B9CA0]">
              This is from the comment
            </p>

            {automation.keywords.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-x-2">
                {
                  //@ts-ignore
                  automation.keywords.map((keyword, key) => (
                    <div
                      key={keyword.id}
                      className={cn(
                        'rounded-full px-4 py-1 capitalize',
                        (0 + 1) % 1 == 0 &&
                          'border-2 border-keyword-green bg-keyword-green/15',
                        (1 + 1) % 2 == 0 &&
                          'border-2 border-keyword-purple bg-keyword-purple/15',
                        (2 + 1) % 3 == 0 &&
                          'border-2 border-keyword-yellow bg-keyword-yellow/15',
                        (3 + 1) % 4 == 0 &&
                          'border-2 border-keyword-red bg-keyword-red/15',
                      )}
                    >
                      {keyword.word}
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="mt-3 rounded-full border-2 border-dashed border-white/60 px-3 py-1">
                <p className="text-sm text-[#bfc0c3]">No Keywords</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm font-light capitalize text-[#9B9CA0]">
              {getMonth(automation.createdAt.getUTCMonth() + 1)}{' '}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{' '}
              {automation.createdAt.getUTCFullYear()}
            </p>

            {automation.listener?.listener === 'SMARTAI' ? (
              <GradientButton
                type="BUTTON"
                className="w-full bg-background-80 text-white hover:bg-background-80"
              >
                Smart AI
              </GradientButton>
            ) : (
              <Button className="bg-background-80 text-white hover:bg-background-80">
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AutomationList;
