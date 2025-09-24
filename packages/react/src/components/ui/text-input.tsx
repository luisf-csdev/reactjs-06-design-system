import type { ComponentProps } from 'react'

import { cn } from '@/lib/cn'

export type TextInputProps = ComponentProps<'input'> & {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <div
      className={cn(
        'flex items-baseline rounded-sm border-2 border-gray-900 bg-gray-900 px-4 py-3',
        'has-[input:focus]:border-ignite-300',
        'has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50',
      )}
    >
      {!!prefix && (
        <span className="font-default font-regular text-sm text-gray-400">
          {prefix}
        </span>
      )}
      <input
        className="font-default font-regular w-full border-0 bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-0 disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  )
}
