import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFDatePicker, MHFDatePickerProps } from '../src';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterMoment from '@date-io/moment';

describe('<MHFDatePicker />', () => {
  test('Renders without crashing', () => {
    render(<MHFDatePickerTest name="MHFDatePickerTest" />);

    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});

const MHFDatePickerTest = ({
  name,
  ...rest
}: Omit<MHFDatePickerProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MHFDatePicker name={name} control={methods.control} {...rest} />
      </LocalizationProvider>
      <Button type="submit">Submit</Button>
    </form>
  );
};
