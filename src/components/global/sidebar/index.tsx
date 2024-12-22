'use client';

import { LogoSmall } from '@/svgs/logo-small';
import React from 'react';
import Items from './items';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { HelpDuoToneWhite } from '@/icons';
// import { SubscriptionPlan } from '../subscription-plan';
// import UpgradeCard from './upgrade';
import { usePaths } from '@/hooks/use-nav';

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props): JSX.Element => {
  const { page } = usePaths();

  return (
    <div className="radial fixed bottom-0 left-0 top-0 m-3 hidden w-[250px] overflow-hidden rounded-3xl border-[1px] border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] lg:inline-block">
      <div className="backdrop--blur__safari flex h-full w-full flex-col gap-y-5 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding p-3 backdrop-blur-3xl backdrop-filter">
        <div className="flex items-center justify-center gap-x-2 p-5">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#333336]" />
        </div>
        <div className="flex flex-col gap-y-5 px-3">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        {/* <SubscriptionPlan type="FREE">
          <div className="flex flex-1 flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan> */}
      </div>
    </div>
  );
};

export default Sidebar;
