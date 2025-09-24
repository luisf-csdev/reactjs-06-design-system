import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import type { BaseProps } from '@/components/types/base-props'

const headingVariants = cva(
  'font-default leading-leading-shorter text-gray-100',
  {
    variants: {
      size: {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-4xl',
        '2xl': 'text-5xl',
        '3xl': 'text-6xl',
        '4xl': 'text-7xl',
        '5xl': 'text-8xl',
        '6xl': 'text-9xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type HeadingProps = BaseProps<'h2'> &
  VariantProps<typeof headingVariants>

export function Heading({ size, asChild, className, ...props }: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'
  return (
    <Comp
      data-slot="heading"
      className={headingVariants({ size, className })}
      {...props}
    />
  )
}
