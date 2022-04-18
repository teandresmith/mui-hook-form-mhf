import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFTextField from '../src/MHFTextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFTextField',
  component: MHFTextField,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFTextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFTextField> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFTextField {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  name: 'Basic',
};

export const Labeled = Template.bind({});

Labeled.args = {
  name: 'Labeled',
  label: 'WithLabel',
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  required: true,
  label: 'Required',
};

export const HelperText = Template.bind({});
HelperText.args = {
  name: 'HelperText',
  helperText: 'You can input any helper text',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  sx: {
    '& .MuiFormLabel-root.MuiInputLabel-root': { color: 'green' },
    '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: 'orange',
      },
  },
  helperText: 'Can provide custom styles through sx prop',
};

export const Password = Template.bind({});
Password.args = {
  name: 'Password',
  type: 'password',
  helperText: 'Hides inputs',
};

export const Email = Template.bind({});
Email.args = {
  name: 'Email',
  helperText: 'Validates input as Email.',
  type: 'email',
};

export const File = Template.bind({});
File.args = {
  name: 'File',
  type: 'file',
  helperText: 'Supports most HMTL5 input types. Check the type prop',
};

export const TextBox = Template.bind({});
TextBox.args = {
  name: 'TextBox',
  multiline: true,
  defaultValue:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus voluptatibus sit ipsam quia pariatur, accusantium veniam ex possimus similique.',
  helperText:
    'Wraps text as a Textbox. Can determine max and min rows through props',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  name: 'FullWidth',
  fullWidth: true,
};

export const WithReactHookFormRules = Template.bind({});
WithReactHookFormRules.args = {
  name: 'WithReactHookFormRules',
  rules: {
    maxLength: {
      value: 4,
      message: 'Input can be no longer than 4 characters',
    },
  },
  helperText: 'Try inputting more than 4 characters',
};
