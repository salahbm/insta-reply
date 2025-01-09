import { Input } from '@/components/ui/input';
import { useKeywords } from '@/hooks/use-automations';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import { useQueryAutomation } from '@/hooks/user-queries';
import { X } from 'lucide-react';
import React from 'react';

type Props = {
  id: string;
};

export const Keywords = ({ id }: Props) => {
  const { onValueChange, keyword, onKeyPress, deleteMutation } =
    useKeywords(id);
  const { latestVariable } = useMutationDataState(['add-keyword']);
  const { data } = useQueryAutomation(id);

  return (
    <div className="flex flex-col gap-y-3 rounded-xl bg-background-80 p-3">
      <p className="text-sm text-text-secondary">
        Add words that trigger automations
      </p>
      <div className="flex flex-wrap items-center justify-start gap-2">
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
              word.id !== latestVariable.variables.id && (
                <div
                  className="flex items-center gap-x-2 rounded-full bg-background-90 px-4 py-1 capitalize text-text-secondary"
                  key={word.id}
                >
                  <p>{word.word}</p>
                </div>
              ),
          )}
        {latestVariable && latestVariable.status === 'pending' && (
          <div className="flex items-center gap-x-2 rounded-full bg-background-90 px-4 py-1 capitalize text-text-secondary">
            {latestVariable.variables.keyword}
          </div>
        )}
        <Input
          placeholder="Add keyword..."
          style={{
            width: Math.min(Math.max(keyword.length || 10, 2), 50) + 'ch',
          }}
          value={keyword}
          className="border-none bg-transparent p-0 outline-none ring-0"
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};
export default Keywords;
