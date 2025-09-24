import { Slot } from '@radix-ui/react-slot'

import type { BaseProps } from '@/components/types/base-props'
import { cn } from '@/lib/cn'

export type BoxProps = BaseProps<'div'>

export function Box({ className, asChild, ...props }: BoxProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="box"
      className={cn(
        'rounded-md border border-gray-600 bg-gray-800 p-4',
        className,
      )}
      {...props}
    />
  )
}
