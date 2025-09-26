import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

const textInputVariants = cva(
  cn(
    'flex items-center rounded-sm border-2 border-gray-900 bg-gray-900',
    'has-[input:focus]:border-ignite-300',
    'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50',
  ),
  {
    variants: {
      size: {
        sm: 'px-3 py-2',
        md: 'px-4 py-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type TextInputProps = ComponentProps<'input'> & {
  prefix?: string
} & VariantProps<typeof textInputVariants>

export function TextInput({
  prefix,
  className,
  size,
  ...props
}: TextInputProps) {
  return (
    <div className={textInputVariants({ size, className })}>
      {!!prefix && (
        <span className="font-default text-sm font-regular text-gray-400">
          {prefix}
        </span>
      )}
      <input
        className="w-full border-0 bg-transparent font-default text-sm font-regular text-white placeholder:text-gray-400 focus:outline-0 disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  )
}
