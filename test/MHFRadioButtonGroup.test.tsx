import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFRadioButtonGroup, MHFRadioButtonGroupProps } from '../src';

describe('<MHFRadioButtonGroup />', () => {
  test('Renders without crashing', () => {
    render(
      <MHFRadioButtonGroupTest
        name="MHFRadioButtonGroupTest"
        formLabel="MHFRadioButtonGroupTest"
        radioLabels={['1', '2', '3']}
        defaultValue={'1'}
      />
    );

    expect(screen.getByRole('radiogroup')).toBeTruthy();

    expect(screen.getByRole('radio', { name: /1/i })).toBeTruthy();
    expect(screen.getByRole('radio', { name: /2/i })).toBeTruthy();
    expect(screen.getByRole('radio', { name: /3/i })).toBeTruthy();
  });

  test('Default Value is set', () => {
    render(
      <MHFRadioButtonGroupTest
        name="MHFRadioButtonGroupTest"
        formLabel="MHFRadioButtonGroupTest"
        radioLabels={['1', '2', '3']}
        defaultValue={'1'}
      />
    );

    expect(
      screen.getByRole('radio', { name: /1/i }).getAttribute('checked')
    ).toBe('');
  });
});

const MHFRadioButtonGroupTest = ({
  name,
  ...rest
}: Omit<MHFRadioButtonGroupProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFRadioButtonGroup name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
