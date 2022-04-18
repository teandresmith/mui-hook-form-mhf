import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFSlider from '../src/MHFSlider';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFSlider',
  component: MHFSlider,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFSlider> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFSlider {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  name: 'WithDefaultValue',
  defaultValue: 32,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  disabled: true,
};

export const WithMarks = Template.bind({});
WithMarks.args = {
  name: 'WithMarks',
  marks: [
    { label: '37', value: 37 },
    { label: '91', value: 91 },
  ],
};

export const WithStep = Template.bind({});
WithStep.args = {
  name: 'WithStep',
  step: 10,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  sx: { color: 'white', backgroundColor: 'black' },
};

export const MinAndMax = Template.bind({});
MinAndMax.args = {
  name: 'MinAndMax',
  min: 20,
  max: 80,
  valueLabelDisplay: 'auto',
  sx: { mt: 3 },
};

export const DisplayValue = Template.bind({});
DisplayValue.args = {
  name: 'DisplayValue',
  valueLabelDisplay: 'auto',
  sx: { mt: 3 },
};

export const Orientation = Template.bind({});
Orientation.args = {
  name: 'Orientation',
  orientation: 'vertical',
  sx: { height: 300 },
};
