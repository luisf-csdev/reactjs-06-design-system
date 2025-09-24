import type { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={cn(
        'font-default font-regular flex min-h-[80px] resize-y items-baseline rounded-sm border-2 border-gray-900 bg-gray-900 px-4 py-3 text-sm text-white',
        'focus:border-ignite-300 focus:outline-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'placeholder:text-gray-400',
        className,
      )}
      {...props}
    />
  )
}
