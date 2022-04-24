import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFCheckbox, MHFCheckboxProps } from '../src';

describe('<MHFCheckbox />', () => {
  test('Renders without crashing', () => {
    render(<MHFCheckboxTest name="MHFCheckboxTest" />);

    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});

const MHFCheckboxTest = ({
  name,
  ...rest
}: Omit<MHFCheckboxProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFCheckbox name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
