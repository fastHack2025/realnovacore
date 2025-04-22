import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition duration-200",
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";
