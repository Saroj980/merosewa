import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-base font-bold whitespace-nowrap transition-all hover:scale-105 active:scale-95 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary-blue)] text-white hover:bg-blue-700",
        outline:
          "border-2 border-slate-200 dark:border-slate-800 bg-transparent text-[var(--dark-navy)] dark:text-white hover:border-[var(--primary-blue)] dark:hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)] dark:hover:text-[var(--primary-blue)]",
        secondary:
          "bg-slate-100 text-[var(--dark-navy)] hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",
        ghost:
          "hover:bg-blue-50 hover:text-[var(--primary-blue)] dark:hover:bg-blue-900/20 dark:hover:text-[var(--primary-blue)] text-[var(--dark-navy)] dark:text-white",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        link: "text-[var(--primary-blue)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        xs: "h-8 px-3 text-xs",
        sm: "h-10 px-4 text-sm",
        lg: "h-16 px-10 text-lg",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
