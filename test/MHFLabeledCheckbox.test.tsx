import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFLabeledCheckbox, MHFLabeledCheckboxProps } from '../src';

describe('<MHFLabeledCheckbox />', () => {
  test('Renders without crashing', () => {
    render(
      <MHFLabeledCheckboxTest
        name="MHFLabeledCheckboxTest"
        label="MHFLabeledCheckBoxTest"
      />
    );

    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});

const MHFLabeledCheckboxTest = ({
  name,
  ...rest
}: Omit<MHFLabeledCheckboxProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFLabeledCheckbox name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
