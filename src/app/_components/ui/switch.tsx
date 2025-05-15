"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [checked, setUnchecked] = React.useState<boolean>(false);

  const changeHandler = async (checked: boolean) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUnchecked(checked);
  };

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-foreground",
        className
      )}
      onCheckedChange={changeHandler}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none h-[120px] w-[120px] rounded-full flex items-center justify-center shadow-lg duration-700 transition-transform data-[state=checked]:translate-x-[120px] data-[state=checked]:bg-[#f28800] data-[state=unchecked]:bg-[#FCAA39] data-[state=unchecked]:translate-x-0"
        )}
      >
        {!checked ? (
          <p className="text-paragraph-heading text-background/95 leading-normal font-semibold">
            Thinking
          </p>
        ) : (
          <p className="text-paragraph-heading text-background/95 leading-normal font-semibold">
            Doing
          </p>
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
