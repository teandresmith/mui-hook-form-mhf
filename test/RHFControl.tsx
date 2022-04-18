import React from 'react';
import { useForm } from 'react-hook-form';

export const RHFControl = () => {
  const { control } = useForm();
  return control;
};
