import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

const buttonVariants = cva(
  cn(
    'flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-sm py-4 text-center font-default text-sm font-medium',
    'disabled:cursor-not-allowed',
    '[&>svg]:h-4 [&>svg]:w-4',
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-ignite-500 text-white',
          'not-disabled:hover:bg-ignite-300',
          'disabled:bg-gray-200',
        ),
        secondary: cn(
          'border-2 border-ignite-500 text-ignite-300',
          'not-disabled:hover:bg-ignite-500 not-disabled:hover:text-white',
          'disabled:border-gray-200 disabled:text-gray-200',
        ),
        tertiary: cn(
          'text-gray-100',
          'not-disabled:hover:text-white',
          'disabled:text-gray-600',
        ),
      },
      size: {
        sm: 'h-[38px]',
        md: 'h-[46px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}
