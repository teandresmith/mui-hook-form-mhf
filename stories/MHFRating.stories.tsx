import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MHFRating from '../src/MHFRating';
import { Button, FormHelperText, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { setConsoleOptions } from '@storybook/addon-console';
import { Square, SquareOutlined } from '@mui/icons-material';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

export default {
  title: 'Components/MHFRating',
  component: MHFRating,
} as ComponentMeta<typeof MHFRating>;

const Template: ComponentStory<typeof MHFRating> = (args, helperText) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFRating {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
};

export const WithPrecision = Template.bind({});
WithPrecision.args = {
  name: 'WithPrecision',
  precision: 0.5,
};

export const MaxRating = Template.bind({});
MaxRating.args = {
  name: 'MaxRating',
  max: 20,
};

export const CustomRatingIcon = Template.bind({});
CustomRatingIcon.args = {
  name: 'CustomRatingIcon',
  emptyIcon: <SquareOutlined />,
  icon: <Square />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  name: 'ReadOnly',
  readOnly: true,
};

export const SetDefaultValue = Template.bind({});
SetDefaultValue.args = {
  name: 'SetDefaultValue',
  defaultValue: 4,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  sx: { color: 'blue', fontSize: 40 },
};
