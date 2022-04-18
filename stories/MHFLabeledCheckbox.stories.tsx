import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFLabeledCheckbox from '../src//MHFLabeledCheckbox';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';
import { HeartBroken, HeartBrokenOutlined } from '@mui/icons-material';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFLabeledCheckbox',
  component: MHFLabeledCheckbox,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFLabeledCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFLabeledCheckbox> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFLabeledCheckbox {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
  label: 'Basic',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  label: 'Disabled',
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  label: 'Required',
  required: true,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  name: 'DefaultChecked',
  label: 'DefaultChecked',
  defaultChecked: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  name: 'CustomIcon',
  label: 'CustomIcon',
  icon: <HeartBrokenOutlined />,
  checkedIcon: <HeartBroken />,
};

// export const Color = Template.bind({})
// Color.args = {
//   name: 'Color',
//   label: 'Color',
//   color: 'warning',
// }

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  label: 'WithCustomStyles',
  sx: { color: 'black', backgroundColor: 'yellowgreen' },
};

export const LabelPlacement = Template.bind({});
LabelPlacement.args = {
  name: 'LabelPlacement',
  label: 'Top Label',
  labelPlacement: 'top',
};
