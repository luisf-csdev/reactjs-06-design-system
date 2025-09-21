import '@/styles/globals.css'

import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

const buttonVariants = cva(
  'bg-ignite-300 font-default rounded-sm font-bold text-white',
  {
    variants: {
      size: {
        small: 'px-4 py-2 text-sm',
        big: 'text-md px-6 py-3',
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
)

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

export function Button({ size, ...props }: ButtonProps) {
  return <button className={buttonVariants({ size })} {...props} />
}
