import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const categories = [
  {
    value: 'Education',
    label: 'Education',
  },
  {
    value: 'Environment',
    label: 'Environment',
  },
  {
    value: 'Healthcare',
    label: 'Healthcare',
  },
];

const Step3 = ({ incrementStep, decrementStep, category, setCategory }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col w-1/2">
      <h1 className="mb-4">Step 3</h1>
      <p className="text-xl my-4">Which category does your block belong to?</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {category !== '' ? category : 'Select category...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search category..." />
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((cat) => (
                <CommandItem
                  key={cat.value}
                  onSelect={(currentValue) => {
                    setCategory(currentValue === category ? '' : cat.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      category === cat.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {cat.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex items-center justify-center gap-4 self-end">
        <button
          type="button"
          className={'bg-[#333333] text-white w-32 mt-2'}
          onClick={decrementStep}
        >
          Previous
        </button>
        <button
          type="button"
          className={
            (category === '' ? 'bg-[#686868]' : 'bg-[#333333]') +
            ' text-white w-24 mt-2'
          }
          disabled={category === ''}
          onClick={() => {
            if (category !== '') {
              incrementStep();
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
