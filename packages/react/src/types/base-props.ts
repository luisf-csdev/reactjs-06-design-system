import type { ElementType } from 'react'

export type BaseProps<T extends ElementType> = React.ComponentProps<T> & {
  asChild?: boolean
}
