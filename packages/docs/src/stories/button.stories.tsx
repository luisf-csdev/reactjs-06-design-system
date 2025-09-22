import { Button, type ButtonProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {},
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
