import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import type { BaseProps } from '@/components/types/base-props'

const textVariants = cva('font-default leading-leading-base text-gray-100', {
  variants: {
    size: {
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = BaseProps<'p'> & VariantProps<typeof textVariants>

export function Text({ size, asChild, className, ...props }: TextProps) {
  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      data-slot="text"
      className={textVariants({ size, className })}
      {...props}
    />
  )
}
