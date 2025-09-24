import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

import { cn } from '@/lib/cn'

export type CheckboxProps = CheckboxPrimitive.CheckboxProps

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-xs border-2 border-transparent bg-gray-900 leading-0',
        'focus:border-ignite-300',
        'data-[state=checked]:bg-ignite-300',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          'h-4 w-4 text-white',
          'data-[state=unchecked]:animate-slide-out',
          'data-[state=checked]:animate-slide-in',
        )}
        asChild
      >
        <Check weight="bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
