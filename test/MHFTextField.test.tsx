import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFTextField, MHFTextFieldProps } from '../src';

describe('<MHFTextField />', () => {
  test('Renders without crashing', () => {
    render(<MHFTextFieldTest name="MHFTextFieldTest" />);

    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});

const MHFTextFieldTest = ({
  name,
  ...rest
}: Omit<MHFTextFieldProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFTextField name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
