import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export const Notifications = () => {
  return (
    <Button className="rounded-full bg-white py-6">
      <Bell color="#3352CC" fill="#3352CC" />
    </Button>
  );
};
