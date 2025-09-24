import { Box } from '@ignite-ui/react/box'
import { Checkbox, type CheckboxProps } from '@ignite-ui/react/checkbox'
import { Text } from '@ignite-ui/react/text'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box asChild>
          <label className="flex gap-2">
            {Story()}
            <Text size="sm">Accept terms of use</Text>
          </label>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
