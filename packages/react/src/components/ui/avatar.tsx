import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

export type AvatarProps = AvatarPrimitive.AvatarImageProps

export function Avatar(props: AvatarProps) {
  return (
    <AvatarPrimitive.Root className="inline-block h-12 w-12 overflow-hidden rounded-full">
      <AvatarPrimitive.Image
        {...props}
        className="h-full w-full rounded-[inherit] object-cover"
      />

      <AvatarPrimitive.Fallback
        delayMs={600}
        className="flex h-full w-full items-center justify-center bg-gray-600 text-gray-800 [&>svg]:h-6 [&>svg]:w-6"
      >
        <User />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
