import { cn } from "@/lib/utils";
import React from "react";
import { UseFormRegister, Path } from "react-hook-form";
import { Label } from "@/app/_components/ui/label";

interface SelectProps<T extends Record<string, any>>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  category: string[];
  label: string;
  register: UseFormRegister<T>;
  name: Path<T>;
}

const SelectCategory = <T extends Record<string, any>>({
  category,
  className,
  label,
  register,
  name,
  ...props
}: SelectProps<T>) => {
  return (
    <div className="space-y-4 w-full">
      <Label
        htmlFor={name.toString()}
        className="text-sm font-heading leading-none font-semibold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
      <select
        {...register(name)}
        id={name.toString()}
        className={cn(
          "flex h-10 w-full mt-3 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {category.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
