import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import MHFSelect from '../../src/MHFSelect';

type FormData = {
  country: object | string;
};

const MHFSelectObjectAsOptions = () => {
  const methods = useForm<FormData>();

  const exampleObjectArray = [
    {
      country: 'United States of America',
      abbreviation: 'USA',
      id: 1,
    },
    {
      country: 'Japan',
      abbreviation: 'JP',
      id: 2,
    },
    {
      country: 'Germany',
      abbreviation: 'DE',
      id: 3,
    },
  ];

  const onSubmit = (data: FormData) => {
    const foundCountry = exampleObjectArray.filter(
      (item) => item.country === data.country
    );
    data.country = foundCountry;

    console.log(data);
  };

  // Both MHFSelect and MHFMultipleSelect have similar props.
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFSelect
        name="country"
        control={methods.control}
        label="Country"
        labelId="country-label"
        selectItemList={exampleObjectArray.map((item) => item.country)}
        sx={{ width: 300 }}
      />
      <br />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};

export default MHFSelectObjectAsOptions;
