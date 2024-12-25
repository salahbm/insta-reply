'use client';
import React from 'react';

import { Button } from '@/components/ui/button';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: 'INSTAGRAM' | 'CRM';
};

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  // const onInstaOAuth = () => onOAuthInstagram(strategy)

  // const { data } = useQuery({
  //   queryKey: ['user-profile'],
  //   queryFn: onUserInfo,
  // })

  // const integrated = data?.data?.integrations.find(
  //   (integration) => integration.name === strategy
  // )

  return (
    <div className="flex items-center justify-between gap-x-5 rounded-2xl border-2 border-[#3352CC] p-5">
      {icon}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl"> {title}</h3>
        <p className="text-base text-[#9D9D9D]">{description}</p>
      </div>
      <Button
        // onClick={onInstaOAuth}
        // disabled={integrated?.name === strategy}
        className="rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-lg font-medium text-white transition duration-100 hover:opacity-70"
      >
        {/* {integrated ? 'Connected' : 'Connect'}fsfsfsfsfs */}
      </Button>
    </div>
  );
};

export default IntegrationCard;
