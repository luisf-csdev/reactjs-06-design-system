import { Heading, type HeadingProps } from '@ignite-ui/react/heading'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {},
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: <h1>H1 Heading</h1>,
    asChild: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "By default, the heading will always be an `h2`, but you can pass the property `asChild` and it'll be replaced by its child element.",
      },
    },
  },
}
