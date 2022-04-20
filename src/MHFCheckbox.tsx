import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Checkbox, SxProps, Theme, CheckboxProps } from '@mui/material';

export type MHFCheckboxProps = {
  // Required Props
  name: string;
  control: Control<any>;

  //Optional Props
  checkedIcon?: React.ReactNode;
  classes?: object;
  color?: CheckboxProps['color'];
  defaultChecked?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  indeterminateIcon?: React.ReactNode;
  inputProps?: object;
  required?: boolean;
  rules?: object;
  size?: 'medium' | 'small' | undefined;
  sx?: SxProps<Theme>;
};

const MHFCheckbox = ({
  defaultChecked,
  defaultValue,
  name,
  control,
  rules,
  ...rest
}: MHFCheckboxProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultChecked ? true : false}
      control={control}
      rules={rules}
      render={({ field: { ref, ...restField } }) => (
        <Checkbox
          defaultChecked={defaultChecked}
          {...restField}
          inputRef={ref}
          {...rest}
        />
      )}
    />
  );
};

export default MHFCheckbox;
