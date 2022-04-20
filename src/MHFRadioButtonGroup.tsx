import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  SxProps,
  Theme,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  RadioProps,
} from '@mui/material';

export type MHFRadioButtonGroupProps = {
  //Required Props
  name: string;
  control: Control<any>;
  defaultValue: any;
  radioLabels: Array<any>;
  formLabel: string;

  //Optional Props
  checkedIcon?: React.ReactNode;
  classes?: object;
  color?: RadioProps['color'];
  disabled?: boolean;
  disableRipple?: boolean;
  formControlSx?: SxProps<Theme>;
  formLabelSx?: SxProps<Theme>;
  getRadioLabel?: (value: any) => string;
  icon?: React.ReactNode;
  id?: string;
  inputProps?: object;
  required?: boolean;
  row?: boolean;
  size?: 'medium' | 'small' | undefined;
  sx?: SxProps<Theme>;
  rules?: object;
};

const MHFRadioButtonGroup = ({
  name,
  control,
  defaultValue,
  getRadioLabel,
  radioLabels,
  formLabel,
  checkedIcon,
  classes,
  color,
  disabled,
  disableRipple,
  formLabelSx,
  formControlSx,
  icon,
  id,
  inputProps,
  required,
  row,
  size,
  sx,
  rules,
}: MHFRadioButtonGroupProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field: { ref, ...restField } }) => (
        <FormControl sx={formControlSx}>
          <FormLabel id={id} sx={formLabelSx}>
            {formLabel}
          </FormLabel>

          <RadioGroup {...restField} row={row}>
            {radioLabels.map((item, key) => {
              const isObject = typeof item === 'object';
              const value = isObject ? getRadioLabel?.(item) : item;

              return (
                <FormControlLabel
                  key={key}
                  value={value}
                  control={
                    <Radio
                      checkedIcon={checkedIcon}
                      color={color}
                      disabled={disabled}
                      disableRipple={disableRipple}
                      icon={icon}
                      id={id}
                      inputProps={inputProps}
                      required={required}
                      size={size}
                    />
                  }
                  label={value}
                  inputRef={ref}
                  sx={sx}
                  classes={classes}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default MHFRadioButtonGroup;
