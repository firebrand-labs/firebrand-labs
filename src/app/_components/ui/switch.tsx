"use client";
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // This ensures we track the element properly
  });

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Turn on switch when scroll progress exceeds 50%
      if (progress > 0.5 && !checked) {
        changeHandler(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, checked]);

  const changeHandler = async (newChecked: boolean) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setChecked(newChecked);
  };

  return (
    <div
      ref={targetRef}
      className="flex flex-col items-center justify-center gap-12 md:gap-20 border border-foreground rounded-2xl w-full min-h-[75.75vh]"
    >
      <div className="flex max-w-5xl">
        <h2 className="text-3xl md:text-6xl text-yellow-level-five leading-tight font-bold inline-flex mr-3">
          Thinking
        </h2>
        <h2
          className={cn(
            "text-3xl md:text-6xl text-yellow-level-five leading-tight font-bold text-center opacity-0 ease-in duration-100",
            checked && "opacity-100"
          )}
        >
          & Doing
        </h2>
      </div>
      <SwitchPrimitives.Root
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-foreground",
          className
        )}
        checked={checked}
        onCheckedChange={changeHandler}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none bg-transparent h-[120px] w-[120px] rounded-full flex items-center justify-center shadow-lg transition-transform duration-700 data-[state=checked]:translate-x-[120px] data-[state=checked]:bg-yellow-level-three data-[state=unchecked]:bg-[#FCAA39] data-[state=unchecked]:translate-x-0"
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
    </div>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;
export { Switch };
