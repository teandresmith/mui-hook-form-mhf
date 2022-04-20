import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  SxProps,
  Theme,
  Switch,
  FormControlLabel,
  SwitchProps,
} from '@mui/material';

export type MHFLabeledSwitchProps = {
  // Required Props
  control: Control<any>;
  name: string;
  label: string;

  // Optional Props
  checkedIcon?: React.ReactNode;
  classes?: object;
  color?: SwitchProps['color'];
  defaultChecked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  edge?: 'end' | 'start' | false;
  icon?: React.ReactNode;
  id?: string;
  inputProps?: object;
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top';
  required?: boolean;
  rules?: object;
  size?: 'medium' | 'small';
  sx?: SxProps<Theme>;
};

const MHFLabeledSwitch = ({
  control,
  name,
  classes,
  defaultChecked,
  disabled,
  label,
  labelPlacement,
  rules,
  sx,
  ...rest
}: MHFLabeledSwitchProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked ? defaultChecked : false}
      rules={rules}
      render={({ field: { ref, ...restField } }) => (
        <FormControlLabel
          {...restField}
          classes={classes}
          disabled={disabled}
          inputRef={ref}
          label={label}
          labelPlacement={labelPlacement}
          sx={sx}
          control={<Switch defaultChecked={defaultChecked} {...rest} />}
        />
      )}
    />
  );
};

export default MHFLabeledSwitch;
