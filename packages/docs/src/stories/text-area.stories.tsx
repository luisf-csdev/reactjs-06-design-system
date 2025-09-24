import { Box } from '@ignite-ui/react/box'
import { Text } from '@ignite-ui/react/text'
import { TextArea, type TextAreaProps } from '@ignite-ui/react/text-area'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box asChild>
          <label className="flex flex-col gap-2">
            <Text size="sm">Observations</Text>
            {Story()}
          </label>
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
