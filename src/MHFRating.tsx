import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { IconContainerProps, Rating, SxProps, Theme } from '@mui/material';

export type MHFRatingProps = {
  // Required Props
  name: string;
  control: Control<any>;

  // Optional Props
  classes?: object;
  defaultValue?: any;
  disabled?: boolean;
  emptyIcon?: React.ReactNode;
  emptyLabelText?: string;
  getLabelText?: (value: number) => string;
  highlightSelectedOnly?: boolean;
  icon?: React.ReactNode;
  IconContainerComponent?: React.ElementType<IconContainerProps>;
  max?: number;
  precision?: number;
  readOnly?: boolean;
  rules?: object;
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps<Theme>;
};

const MHFRating = ({
  defaultValue,
  name,
  control,
  rules,
  ...rest
}: MHFRatingProps) => {
  return (
    <Controller
      defaultValue={defaultValue ? defaultValue : 3}
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Rating
          name={name}
          value={Number(field.value)}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...field.ref}
          {...rest}
        />
      )}
    />
  );
};

export default MHFRating;
