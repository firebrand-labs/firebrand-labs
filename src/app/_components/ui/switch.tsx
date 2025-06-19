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
    <>
      <h2 className="text-3xl md:text-6xl text-yellow-level-five/70 leading-tight font-bold ">
        Thinking
      </h2>
      <SwitchPrimitives.Root
        className={cn(
          "peer  inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-foreground",
          className
        )}
        onCheckedChange={changeHandler}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none bg-transparent h-[120px] w-[120px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-700  data-[state=checked]:translate-x-[120px]  data-[state=checked]:bg-yellow-level-three data-[state=unchecked]:bg-[#FCAA39] data-[state=unchecked]:translate-x-0"
          )}
        >
          {!checked ? (
            <p className="text-paragraph-heading text-background/95 leading-normal font-semibold hidden">
              Thinking
            </p>
          ) : (
            <p className="text-paragraph-heading text-background/95 leading-normal font-semibold hidden">
              Doing
            </p>
          )}
        </SwitchPrimitives.Thumb>
      </SwitchPrimitives.Root>
      <h2
        className={cn(
          "text-3xl md:text-6xl text-yellow-level-five leading-tight font-bold text-center opacity-0 ease-in duration-100",
          checked && "opacity-100"
        )}
      >
        + <br />
        Doing
      </h2>
    </>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
