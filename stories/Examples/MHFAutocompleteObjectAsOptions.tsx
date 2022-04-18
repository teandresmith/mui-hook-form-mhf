import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import MHFAutocomplete from '../../src/MHFAutocomplete';

type FormData = {
  country: object;
};

const MHFAutocompleteObjectAsOptions = () => {
  const methods = useForm<FormData>();

  const exampleObjectArray = [
    {
      label: 'United States of America',
      country: 'United States of America',
      abbreviation: 'USA',
      id: 1,
    },
    {
      label: 'Japan',
      country: 'Japan',
      abbreviation: 'JP',
      id: 2,
    },
    {
      label: 'Germany',
      country: 'Germany',
      abbreviation: 'DE',
      id: 3,
    },
    {
      label: 'All Countries',
      country: 'All Countries!',
      abbreviation: 'NO',
      id: 4,
    },
  ];

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFAutocomplete
        name="country"
        control={methods.control}
        options={exampleObjectArray}
        defaultValue={exampleObjectArray[0]}
        isOptionEqualToValue={(option: any, value: any) =>
          option.label === value.label
        }
      />
      <br />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};

export default MHFAutocompleteObjectAsOptions;
