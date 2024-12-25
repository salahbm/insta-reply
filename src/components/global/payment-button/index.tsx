import { CreditCardIcon, Loader2 } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/use-subscription';

type Props = {};

const PaymentButton = (_props: Props): JSX.Element => {
  const { onSubscribe, isProcessing } = useSubscription();
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="rounded-full bg-gradient-to-br from-[#6d60a3] via-[#9434E6] to-[#CC3BD4] font-bold text-white"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
};

export default PaymentButton;
