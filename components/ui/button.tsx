import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Import important
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    // Utilise le composant Slot (Majuscule) et non la chaîne 'slot'
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
          variant === 'default' && "bg-primary-600 text-white hover:bg-primary-700",
          variant === 'outline' && "border border-gray-300 bg-transparent hover:bg-gray-100",
          variant === 'ghost' && "hover:bg-gray-100",
          size === 'default' && "h-10 px-4 py-2",
          size === 'sm' && "h-9 px-3",
          size === 'lg' && "h-11 px-8",
          className
        )}
        ref={ref} 
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }