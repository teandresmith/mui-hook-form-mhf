import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MHFAutocomplete, MHFAutocompleteProps } from '../src';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

describe('<MHFAutocomplete />', () => {
  test('MHFAutocomplete renders without crashing', () => {
    render(
      <MHFAutoCompleteTest
        name={'MHFAutocompleteTest'}
        options={['option1', 'option2']}
        isOptionEqualToValue={(option: any, value: any) =>
          option.label === value.label || value === ''
        }
      />
    );

    expect(screen.getByRole('combobox')).toBeTruthy();
  });

  test('MHFAutocomplete value changes after option is clicked', async () => {
    render(
      <MHFAutoCompleteTest
        name={'MHFAutocompleteTest'}
        options={['option1', 'option2']}
        isOptionEqualToValue={(option: any, value: any) =>
          option.label === value.label || value === ''
        }
      />
    );

    const autocomplete = screen.getByRole('combobox');

    expect(autocomplete).toBeTruthy();

    autocomplete.focus();

    fireEvent.change(autocomplete, {
      target: {
        value: 'option1',
      },
    });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });

    expect(screen.getByDisplayValue('option1')).toBeTruthy();
  });
});

const MHFAutoCompleteTest = ({
  name,
  ...rest
}: Omit<MHFAutocompleteProps, 'control'>) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFAutocomplete name={name} control={methods.control} {...rest} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
