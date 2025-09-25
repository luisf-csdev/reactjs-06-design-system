import { Box, BoxProps } from '@luisf-ignite-ui/react/box'
import { Text } from '@luisf-ignite-ui/react/text'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing Box Element</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
