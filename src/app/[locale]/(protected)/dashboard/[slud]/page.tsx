import { BarDuoToneBlue } from '@/icons';
import React from 'react';

type Props = {};

const Page = (_props: Props): JSX.Element => {
  return (
    <div className="flex flex-col gap-y-10">
      {/* <div className="flex flex-col gap-5 lg:flex-row">
        {DASHBOARD_CARDS.map((card) => (
          <DoubleGradientCard key={card.id} {...card} />
        ))}
      </div> */}
      <div className="border-in-active/50 relative rounded-xl border-[1px] p-5">
        <span className="z-50 flex items-center gap-x-1">
          <BarDuoToneBlue />
          <div className="z-50">
            <h2 className="text-2xl font-medium text-white">
              Automated Activity
            </h2>
            <p className="text-text-secondary text-sm">
              Automated 0 out of 1 interactions
            </p>
          </div>
        </span>
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <div className="lg:w-6/12">{/* <Chart /> */}</div>
          <div className="lg:w-6/12">{/* <MetricsCard /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
