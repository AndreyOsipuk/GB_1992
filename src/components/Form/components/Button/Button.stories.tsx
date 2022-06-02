import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  argTypes: {
    click: { action: 'click' },
  },
  component: Button,
  title: 'MyComponents/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'test',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'test',
};
