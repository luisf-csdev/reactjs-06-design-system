import { Box } from '@ignite-ui/react/box'
import { MultiStep, type MultiStepProps } from '@ignite-ui/react/multi-step'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box asChild>
          <label className="flex flex-col gap-2">{Story()}</label>
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
