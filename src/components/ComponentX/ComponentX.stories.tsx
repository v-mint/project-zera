import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ComponentX from './ComponentX'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ComponentX',
  component: ComponentX,
} as ComponentMeta<typeof ComponentX>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ComponentX> = (args) => (
  <ComponentX {...args} />
)

export const June = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
June.args = {
  label: 'June',
}

export const OMG = Template.bind({})
OMG.args = {
  label: 'OMG',
}
