import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import InfoBar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';
import React from 'react';
import {
  PrefetchUserAutnomations,
  PrefetchUserProfile,
} from '@/react-query/prefetch';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  const query = new QueryClient();

  await PrefetchUserProfile(query);

  await PrefetchUserAutnomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        <Sidebar slug={params.slug} />
        <div className="flex flex-col overflow-auto lg:ml-[250px] lg:py-5 lg:pl-10">
          <InfoBar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
