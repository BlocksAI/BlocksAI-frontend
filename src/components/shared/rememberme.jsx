import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const RememberMe = () => {
  return (
    <div className="items-top flex space-x-2 mt-4 w-full gap-2">
      <Checkbox id="rememberMe" className="p-0 w-6 h-6" />
      <div className="leading-none">
        <label
          htmlFor="rememberMe"
          className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </label>
        <p className="text-sm text-muted-foreground mt-1">
          Save my login details for next time
        </p>
      </div>
    </div>
  );
};

export default RememberMe;
