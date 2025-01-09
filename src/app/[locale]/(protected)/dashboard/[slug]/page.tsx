import DoubleGradientCard from '@/components/global/double-gradient-card';
import { DASHBOARD_CARDS } from '@/constants/dashboard';
import { BarDuoToneBlue } from '@/icons';
import React from 'react';
import Chart from './_components/metrics';
import MetricsCard from './_components/metrics/metrics-card';

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-5 lg:flex-row">
        {DASHBOARD_CARDS.map((card) => (
          <DoubleGradientCard key={card.id} {...card} />
        ))}
      </div>
      <div className="relative rounded-xl border-[1px] border-in-active/50 p-5">
        <span className="z-50 flex items-center gap-x-1">
          <BarDuoToneBlue />
          <div className="z-50">
            <h2 className="text-2xl font-medium text-white">
              Automated Activity
            </h2>
            <p className="text-sm text-text-secondary">
              Automated 0 out of 1 interactions
            </p>
          </div>
        </span>
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <div className="lg:w-6/12">
            <Chart />
          </div>
          <div className="lg:w-6/12">
            <MetricsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
