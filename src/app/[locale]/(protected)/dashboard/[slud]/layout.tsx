import React from 'react';

import InfoBar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props): Promise<JSX.Element> => {
  // const query = new QueryClient();

  // await PrefetchUserProfile(query);

  // await PrefetchUserAutnomations(query);

  return (
    // <HydrationBoundary state={dehydrate(query)}>
    <div className="p-3">
      <Sidebar slug={params.slug} />
      <div className="flex flex-col overflow-auto lg:ml-[250px] lg:py-5 lg:pl-10">
        <InfoBar slug={params.slug} />
        {children}
      </div>
    </div>
    // </HydrationBoundary>
  );
};

export default Layout;
