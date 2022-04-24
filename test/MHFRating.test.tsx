import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MHFRating, MHFRatingProps } from '../src';

describe('<MHFRating />', () => {
  test('Renders without crashing', () => {
    render(<MHFRatingTest name="MHFRatingTest" />);

    expect(screen.getByRole('radio', { name: /1 Star/i })).toBeTruthy();
    expect(screen.getByRole('radio', { name: /2 Stars/i })).toBeTruthy();
    expect(screen.getByRole('radio', { name: /3 Stars/i })).toBeTruthy();
    expect(screen.getByRole('radio', { name: /4 Stars/i })).toBeTruthy();
    expect(screen.getByRole('radio', { name: /5 Stars/i })).toBeTruthy();
  });
});

const MHFRatingTest = ({ name, ...rest }: Omit<MHFRatingProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFRating name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
