/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import Button from '../button.tsx';

export default {
  title: 'Button',
  component: Button,
  argTypes: { clickHandler: { action: 'handleClick' } },
};

function Template(args) {
  return <Button {...args} />;
}

export const defaultPrimary = Template.bind({});
defaultPrimary.args = {
  type: 'primary',
  state: 'default',
  text: 'Contact Us',
  icon: './phone.svg',
};

export const defaultSecondary = Template.bind({});
defaultSecondary.args = {
  type: 'secondary',
  state: 'default',
  text: 'Contact Us',
  icon: './phone.svg',
};

export const defaultTertiary = Template.bind({});
defaultTertiary.args = {
  type: 'tertiary',
  state: 'default',
  text: 'Contact Us',
  icon: './phone.svg',
};

export const disabledPrimary = Template.bind({});
disabledPrimary.args = {
  type: 'primary',
  state: 'disabled',
  text: 'Submit',
  icon: './submit.svg',
};

export const disabledSecondary = Template.bind({});
disabledSecondary.args = {
  type: 'secondary',
  state: 'disabled',
  text: 'Submit',
  icon: './submit.svg',
};

export const disabledTertiary = Template.bind({});
disabledTertiary.args = {
  type: 'tertiary',
  state: 'disabled',
  text: 'Submit',
  icon: './submit.svg',
};

export const loadingPrimary = Template.bind({});
loadingPrimary.args = {
  type: 'primary',
  state: 'loading',
  text: 'Loading',
  icon: './spinner.svg',
};

export const loadingSecondary = Template.bind({});
loadingSecondary.args = {
  type: 'secondary',
  state: 'loading',
  text: 'Loading',
  icon: './spinner.svg',
};

export const loadingTertiary = Template.bind({});
loadingTertiary.args = {
  type: 'tertiary',
  state: 'loading',
  text: 'Loading',
  icon: './spinner.svg',
};
