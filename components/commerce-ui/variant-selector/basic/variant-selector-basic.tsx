"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
}

interface VariantSelectorBasicProps {
  value: string;
  onValueChange: (value: string) => void;
  variants: VariantItem[];
  className?: string;
}

const VariantSelectorBasic = ({
  className,
  onValueChange,
  value,
  variants,
}: VariantSelectorBasicProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex flex-wrap gap-3", className)}
      value={value}
      onValueChange={onValueChange}
    >
      {variants.map((variant) => (
        <div key={variant.id} className="flex items-center">
          <RadioGroupPrimitive.Item
            id={variant.id}
            value={variant.value}
            className={cn(
              "peer relative h-10 w-full min-w-[80px] rounded-md border border-gray-300 px-3 py-2 text-center text-sm transition-all",
              "dark:border-gray-600 dark:text-gray-100",
              "data-[state=checked]:border-2 data-[state=checked]:border-black dark:data-[state=checked]:border-white",
              "focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none",
              "dark:focus:ring-white dark:focus:ring-offset-gray-900",
              "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            <span className="font-medium">{variant.label}</span>
          </RadioGroupPrimitive.Item>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default VariantSelectorBasic;
