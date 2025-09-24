import { cn } from '@/lib/cn'

import { Text } from './text'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div>
      <Text className="text-gray-200" size="xs">
        Step {currentStep} of {size}
      </Text>

      <div
        style={{ '--steps-size': size } as React.CSSProperties}
        className="mt-1 grid grid-cols-[repeat(var(--steps-size),1fr)] gap-2"
      >
        {Array.from({ length: size }).map((_, i) => {
          const step = i + 1
          const active = currentStep >= step
          return (
            <div
              key={step}
              className={cn(
                'h-1 rounded-px bg-gray-600',
                active && 'bg-gray-100',
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
