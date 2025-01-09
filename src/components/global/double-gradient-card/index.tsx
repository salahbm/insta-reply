import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

type Props = {
  label: string;
  subLabel: string;
  description: string;
};

const DoubleGradientCard = ({ description, label, subLabel }: Props) => {
  return (
    <div className="relative flex flex-col gap-y-20 overflow-hidden rounded-xl border-[1px] border-in-active/50 p-5">
      <div className="z-40 flex flex-col">
        <h2 className="text-2xl font-medium">{label}</h2>
        <p className="text-sm text-text-secondary">{subLabel}</p>
      </div>
      <div className="z-40 flex items-center justify-between gap-x-10">
        <p className="text-sm text-text-secondary">{description}</p>
        <Button className="h-10 w-10 rounded-full bg-light-blue">
          <ArrowRight color="white" />
        </Button>
      </div>
      <div className="radial--double--gradient--cards--top absolute left-0 top-0 z-10 h-full w-6/12" />
      <div className="radial--double--gradient--cards--bottom absolute left-1/2 right-0 top-0 z-0 h-full w-6/12" />
    </div>
  );
};

export default DoubleGradientCard;
