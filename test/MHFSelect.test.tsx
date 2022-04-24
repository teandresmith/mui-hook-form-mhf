import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFSelect, MHFSelectProps } from '../src';

describe('<MHFSelect />', () => {
  test('Renders without crashing', () => {
    render(
      <MHFSelectTest
        name="MHFSelectTest"
        label="MHFSelectTest"
        labelId="MHFSelectTest-id"
        selectItemList={['Yu', 'Jimmy', 'Sarah', 'Jasmine']}
      />
    );

    expect(
      screen.getByRole('button', { name: /mhfselecttest /i })
    ).toBeTruthy();
  });
});

const MHFSelectTest = ({ name, ...rest }: Omit<MHFSelectProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFSelect name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
