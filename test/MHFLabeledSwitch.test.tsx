import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFLabeledSwitch, MHFLabeledSwitchProps } from '../src';

describe('<MHFLabeledSwitch />', () => {
  test('Renders without crashing', () => {
    render(
      <MHFLabeledSwitchTest
        name="MHFLabeledSwitchTest"
        label="MHFLabeledSwitchTest"
      />
    );

    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});

const MHFLabeledSwitchTest = ({
  name,
  ...rest
}: Omit<MHFLabeledSwitchProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFLabeledSwitch name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
