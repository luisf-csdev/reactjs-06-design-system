import { Box } from '@luisf-ignite-ui/react/box'
import { Checkbox, type CheckboxProps } from '@luisf-ignite-ui/react/checkbox'
import { Text } from '@luisf-ignite-ui/react/text'
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
