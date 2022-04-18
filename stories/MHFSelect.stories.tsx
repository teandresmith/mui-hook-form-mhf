import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFSelect from '../src/MHFSelect';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFSelect',
  component: MHFSelect,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFSelect>;

const names = [
  'Tim',
  'Bryan',
  'Thomas',
  'Jennifer',
  'Taro',
  'Jamal',
  'Abdul',
  'Yu',
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFSelect> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFSelect {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
  selectItemList: names,
  labelId: 'basic-id',
  label: 'Basic',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  name: 'WithDefaultValue',
  label: 'WithDefaultValue',
  labelId: 'withDefaultValue-label',
  selectItemList: names,
  defaultValue: 'Tim',
};

export const HelperText = Template.bind({});
HelperText.args = {
  name: 'HelperText',
  label: 'HelperText',
  labelId: 'helpertext-id',
  selectItemList: names,
  helperText: 'Select with Helper Text',
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  label: 'Required',
  labelId: 'Required',
  selectItemList: names,
  required: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  name: 'FullWidth',
  label: 'FullWidth',
  labelId: 'fullwidth-label',
  selectItemList: names,
  fullWidth: true,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  label: 'WithCustomStyles',
  labelId: 'withcustomstyles-label',
  selectItemList: names,
  formControlSx: { height: 500, width: 300 },
  inputLabelSx: { color: 'green' },
  sx: { backgroundColor: 'lightyellow' },
};

export const WithReactHookFormRules = Template.bind({});
WithReactHookFormRules.args = {
  name: 'WithReactHookFormRules',
  label: 'WithReactHookFormRules',
  labelId: 'withreacthookformrules-label',
  selectItemList: names,
  rules: { validate: (data: any) => data === '' },
  helperText: 'Try selecting any option but None',
};

export const Native = Template.bind({});
Native.args = {
  name: 'Native',
  label: 'Native',
  labelId: 'native-label',
  selectItemList: names,
  native: true,
};
