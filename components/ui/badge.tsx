import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === 'default' && "bg-primary-100 text-primary-800",
        variant === 'outline' && "border border-gray-300 bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
