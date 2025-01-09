'use client';

import { PAGE_BREAD_CRUMBS } from '@/constants/pages';
import { usePaths } from '@/hooks/user-nav';
import { Menu } from 'lucide-react';
import React from 'react';
import Sheet from '../sheet';
import Items from '../sidebar/items';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { HelpDuoToneWhite } from '@/icons';
import { SubscriptionPlan } from '../subscription-plan';
import UpgradeCard from '../sidebar/upgrade';
import { LogoSmall } from '@/svgs/logo-small';
import CreateAutomation from '../create-automation';
import Search from './search';
import { Notifications } from './notifications';
import MainBreadCrumb from '../bread-crumbs/main-bread-crumb';

type Props = {
  slug: string;
};

const InfoBar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex justify-end gap-x-3 lg:gap-x-5">
          <span className="flex flex-1 items-center gap-x-2 lg:hidden">
            <Sheet trigger={<Menu />} className="lg:hidden" side="left">
              <div className="backdrop--blur__safari flex h-full w-full flex-col gap-y-5 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding p-3 backdrop-blur-3xl backdrop-filter">
                <div className="flex items-center justify-center gap-x-2 p-5">
                  <LogoSmall />
                </div>
                <div className="flex flex-col py-3">
                  <Items page={page} slug={slug} />
                </div>
                <div className="px-16">
                  <Separator
                    orientation="horizontal"
                    className="bg-[#333336]"
                  />
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
                <SubscriptionPlan type="FREE">
                  <div className="flex flex-1 flex-col justify-end">
                    <UpgradeCard />
                  </div>
                </SubscriptionPlan>
              </div>
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? 'Home' : page} slug={slug} />
      </div>
    )
  );
};

export default InfoBar;
