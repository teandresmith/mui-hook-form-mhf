import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MHFCheckbox from '../src/MHFCheckbox';
import { Button, CheckboxProps } from '@mui/material';
import { useForm } from 'react-hook-form';

import { setConsoleOptions } from '@storybook/addon-console';
import { HeartBroken, HeartBrokenOutlined } from '@mui/icons-material';

setConsoleOptions({ panelExclude: [/Warning/, /Addon controls/] });

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MHFCheckbox',
  component: MHFCheckbox,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MHFCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MHFCheckbox> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFCheckbox {...args} control={methods.control} />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'Disabled',
  disabled: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'Required',
  required: true,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  name: 'DefaultedChecked',
  defaultChecked: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  name: 'CustomIcon',
  icon: <HeartBrokenOutlined />,
  checkedIcon: <HeartBroken />,
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  name: 'WithCustomStyles',
  sx: { color: 'black', backgroundColor: 'yellowgreen' },
};
