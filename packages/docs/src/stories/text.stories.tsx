import { Text, type TextProps } from '@ignite-ui/react/text'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem incidunt eaque quibusdam adipisci voluptatum blanditiis fugit, optio tempora inventore sit quaerat neque modi voluptas, quos odit iure amet quisquam est.',
  },
  argTypes: {
    size: {
      options: [
        '2xs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: <strong>Strong text</strong>,
    asChild: true,
  },
}
