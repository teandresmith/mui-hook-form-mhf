import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFTimePicker, MHFTimePickerProps } from '../src';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterMoment from '@date-io/moment';

describe('<MHFTimePicker />', () => {
  test('Renders without crashing', () => {
    render(<MHFTimePickerTest name="MHFTimePickerTest" />);

    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});

const MHFTimePickerTest = ({
  name,
  ...rest
}: Omit<MHFTimePickerProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MHFTimePicker name={name} control={methods.control} {...rest} />
      </LocalizationProvider>
      <Button type="submit">Submit</Button>
    </form>
  );
};
