import { Box, BoxProps } from '@ignite-ui/react/box'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <span>Testing Box Element</span>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {},
}
