import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import MHFRadioButtonGroup from '../../src/MHFRadioButtonGroup';

type FormData = {
  country: object | string;
};

const MHFRadioButtonGroupObjectAsOptions = () => {
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
    {
      country: 'All Countries!',
      abbreviation: 'NO',
      id: 4,
    },
  ];

  const onSubmit = (data: FormData) => {
    const foundCountry = exampleObjectArray.filter(
      (item) => item.country === data.country
    );
    data.country = foundCountry;

    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFRadioButtonGroup
        name="country"
        control={methods.control}
        formLabel="Favorite Country"
        radioLabels={exampleObjectArray}
        getRadioLabel={(value: any) => value.country}
        defaultValue={exampleObjectArray[0].country}
      />
      <br />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </form>
  );
};

export default MHFRadioButtonGroupObjectAsOptions;
