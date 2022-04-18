import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFRadioButtonGroup from '../src/MHFRadioButtonGroup';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';
import { HeartBroken, HeartBrokenOutlined } from '@mui/icons-material';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFRadioButtonGroup',
  component: MHFRadioButtonGroup,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFRadioButtonGroup>;

const satisfactionLevel = [
  'Mostly Agree',
  'Agree',
  'Neutral',
  'Disagree',
  'Mostly Disagree',
];

const exampleObjectArray = [
  {
    title: 'Godfather',
    rating: 5,
  },
  {
    title: 'Transformers',
    rating: 5,
  },
  {
    title: 'Neither',
    rating: 0,
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFRadioButtonGroup> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFRadioButtonGroup {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
  radioLabels: satisfactionLevel,
  formLabel: 'People are naturally good',
  defaultValue: satisfactionLevel[0],
};

export const ObjectAsRadioLabels = Template.bind({});
ObjectAsRadioLabels.args = {
  name: 'ObjectAsRadioLabels',
  radioLabels: exampleObjectArray,
  formLabel: 'Favorite Movie',
  defaultValue: exampleObjectArray[0].title,
  getRadioLabel: (value: any) => value.title,
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  radioLabels: satisfactionLevel,
  formLabel: 'Radio Labels Are Good',
  defaultValue: satisfactionLevel[2],
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  radioLabels: satisfactionLevel,
  formLabel: 'This is Disabled',
  defaultValue: satisfactionLevel[0],
  disabled: true,
};

export const RadioGroupRow = Template.bind({});
RadioGroupRow.args = {
  name: 'RadioGroupRow',
  radioLabels: satisfactionLevel,
  formLabel: 'Everyone Loves Rows',
  defaultValue: satisfactionLevel[1],
  row: true,
};

export const CustomRadioIcon = Template.bind({});
CustomRadioIcon.args = {
  name: 'CustomRadioIcon',
  radioLabels: satisfactionLevel,
  formLabel: 'People enjoy custom icons',
  defaultValue: satisfactionLevel[0],
  icon: <HeartBrokenOutlined />,
  checkedIcon: <HeartBroken />,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  radioLabels: satisfactionLevel,
  formLabel: 'Custom Styling is Cool',
  defaultValue: satisfactionLevel[2],
  formControlSx: { backgroundColor: 'lightskyblue' },
  formLabelSx: { fontSize: 40, color: 'darkblue' },
  sx: { color: 'purple' },
};
