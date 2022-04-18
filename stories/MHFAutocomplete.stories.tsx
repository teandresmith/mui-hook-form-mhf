import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFAutocomplete from '../src/MHFAutocomplete';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFAutocomplete',
  component: MHFAutocomplete,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFAutocomplete>;

const options = [
  '',
  'Tokyo',
  'Los Angeles',
  'San Fransicso',
  'Paris',
  'London',
  'Beijing',
  'Taipei',
  'Berlin',
  'New York',
  'Rome',
];

const objectArray = [
  {
    city: 'Tokyo',
    rank: 1,
  },
  {
    city: 'Los Angeles',
    rank: 2,
  },
  {
    city: 'Sydney',
    rank: 3,
  },
  {
    city: 'Paris',
    rank: 4,
  },
  {
    city: 'London',
    rank: 5,
  },
  {
    city: 'Beijing',
    rank: 6,
  },
  {
    city: 'Taipei',
    rank: 7,
  },
  {
    city: 'Berlin',
    rank: 8,
  },
  {
    city: 'New York',
    rank: 9,
  },
  {
    city: 'Rome',
    rank: 10,
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFAutocomplete> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFAutocomplete {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
  options: options,
  isOptionEqualToValue: (option, value) => option === value,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  options: options,
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  options: options,
  required: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  name: 'HelperText',
  options: options,
  helperText: 'Autocomplete helper text',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  name: 'FullWidth',
  options: options,
  fullWidth: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  name: 'ReadOnly',
  options: options,
  readOnly: true,
  defaultValue: options[0],
};

export const ObjectArrayAsOptions = Template.bind({});
ObjectArrayAsOptions.args = {
  name: 'ObjectArrayAsOptions',
  options: objectArray,
  getOptionLabel: (option: any) => option.city,
  isOptionEqualToValue: (option: any, value: any) => option.city === value.city,
  defaultValue: objectArray[0],
};

export const FreeSolo = Template.bind({});
FreeSolo.args = {
  name: 'FreeSolo',
  options: options,
  freeSolo: true,
  isOptionEqualToValue: (option: any, value: any) => true,
  label: 'Free Solo Autocomplete',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  options: options,
  isOptionEqualToValue: () => true,
  label: 'WithCustomStyles',
  sx: { backgroundColor: 'yellowgreen' },
};

export const WithReactHookFormRules = Template.bind({});
WithReactHookFormRules.args = {
  name: 'WithReactHookFormRules',
  options: options,
  freeSolo: true,
  isOptionEqualToValue: () => true,
  label: 'WithReactHookFormRules',
  rules: { maxLength: { value: 4, message: 'Maximum of 4 Character Input' } },
  helperText: 'Try an input longer than 4 characters',
};
