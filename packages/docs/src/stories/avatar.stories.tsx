import { Avatar, type AvatarProps } from '@luisf-ignite-ui/react/avatar'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/luisf-csdev.png',
    alt: 'Luís Felipe',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
