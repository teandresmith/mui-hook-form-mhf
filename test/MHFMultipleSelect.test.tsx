import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFMultipleSelect, MHFMultipleSelectProps } from '../src';

describe('<MHFMultipleSelect />', () => {
  test('Renders without crashing', () => {
    render(
      <MHFMultipleSelectTest
        name="MHFMultipleSelectTest"
        label="MHFMultipleSelectTest"
        labelId="MHFMultipleSelectTest-id"
        selectItemList={['Yu', 'Jimmy', 'Sarah', 'Jasmine']}
      />
    );

    expect(
      screen.getByRole('button', { name: /mhfmultipleselecttest /i })
    ).toBeTruthy();
  });
});

const MHFMultipleSelectTest = ({
  name,
  ...rest
}: Omit<MHFMultipleSelectProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFMultipleSelect name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
