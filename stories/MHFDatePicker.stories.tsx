import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFDatePicker from '../src/MHFDatePicker';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFDatePicker',
  component: MHFDatePicker,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFDatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFDatePicker> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MHFDatePicker {...args} control={methods.control} />
      </LocalizationProvider>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
  helperText: 'Make sure to wrap MHFDatePicker in a LocalizationProvider',
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  required: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  name: 'ReadOnly',
  readOnly: true,
  defaultValue: new Date(),
};

export const Labeled = Template.bind({});
Labeled.args = {
  name: 'Labeled',
  label: 'Date Label',
};

export const HelperText = Template.bind({});
HelperText.args = {
  name: 'HelperText',
  helperText: 'Input Date as MM/DD/YYYY',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  name: 'FullWidth',
  fullWidth: true,
};

export const WithReactHookFormRules = Template.bind({});
WithReactHookFormRules.args = {
  name: 'WithReactHookFormRules',
  rules: { validate: (data: any) => !data.toString().includes('Apr') },
  helperText: 'Try picking a date in April',
};
