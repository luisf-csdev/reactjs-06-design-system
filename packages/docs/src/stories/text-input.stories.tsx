import { Box } from '@luisf-ignite-ui/react/box'
import { Text } from '@luisf-ignite-ui/react/text'
import {
  TextInput,
  type TextInputProps,
} from '@luisf-ignite-ui/react/text-input'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box asChild>
          <label className="flex flex-col gap-2">
            <Text size="sm">Email address</Text>
            {Story()}
          </label>
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
