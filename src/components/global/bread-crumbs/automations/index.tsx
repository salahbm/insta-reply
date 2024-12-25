'use client';
import { ChevronRight, PencilIcon } from 'lucide-react';
import React from 'react';
import { Input } from '@/components/ui/input';
import ActivateAutomationButton from '../../activate-automation-button';

type Props = {
  id: string;
};

const AutomationsBreadCrumb = ({ id }: Props) => {
  //   const { data } = useQueryAutomation(id);
  //   const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id);

  //   const { latestVariable } = useMutationDataState(['update-automation']);

  return (
    <div className="flex w-full items-center rounded-full bg-[#18181B1A] p-5">
      <div className="flex min-w-0 items-center gap-x-3">
        <p className="truncate text-[#9B9CA0]">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        {/* <span className="flex min-w-0 items-center gap-x-3">
          {edit ? (
            <Input
              ref={inputRef}
              placeholder={
                isPending ? latestVariable.variables : 'Add a new name'
              }
              className="h-auto border-none bg-transparent p-0 text-base outline-none"
            />
          ) : (
            <p className="truncate text-[#9B9CA0]">
              {latestVariable?.variables
                ? latestVariable?.variables.name
                : data?.data?.name}
            </p>
          )}
          {edit ? (
            <></>
          ) : (
            <span
              className="mr-4 flex-shrink-0 cursor-pointer transition duration-100 hover:opacity-75"
              onClick={enableEdit}
            >
              <PencilIcon size={14} />
            </span>
          )}
        </span> */}
      </div>

      <div className="ml-auto flex items-center gap-x-5">
        <p className="hidden min-w-0 truncate text-sm text-text-secondary/60 md:block">
          All states are automatically saved
        </p>
        <div className="flex flex-shrink-0 gap-x-5">
          <p className="min-w-0 truncate text-sm text-text-secondary">
            Changes Saved
          </p>
        </div>
      </div>
      <ActivateAutomationButton id={id} />
    </div>
  );
};

export default AutomationsBreadCrumb;
