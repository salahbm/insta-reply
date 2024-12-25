'use client';

import { Button } from '@/components/ui/button';
import React, { useMemo } from 'react';
import Loader from '../loader';
import { AutomationDuoToneWhite } from '@/icons';

import { v4 } from 'uuid';

const CreateAutomation = () => {
  const mutationId = useMemo(() => v4(), []);

  console.log(mutationId);
  // const { isPending, mutate } = useCreateAutomation(mutationId)

  return (
    <Button
      className="rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] py-6 font-medium text-white hover:opacity-80 lg:px-10"
      // onClick={() =>
      //   mutate({
      //     name: 'Untitled',
      //     id: mutationId,
      //     createdAt: new Date(),
      //     keywords: [],
      //   })
      // }
    >
      <Loader state={false}>
        <AutomationDuoToneWhite />
        <p className="hidden lg:inline">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
