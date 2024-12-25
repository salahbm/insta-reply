import { Bell } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Notifications = (): JSX.Element => {
  return (
    <Button className="rounded-full bg-white py-6">
      <Bell color="#3352CC" fill="#3352CC" />
    </Button>
  );
};
