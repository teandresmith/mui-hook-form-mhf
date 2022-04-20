import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  FormControl,
  InputLabel,
  Select,
  SxProps,
  Theme,
  MenuItem,
  FormHelperText,
  SelectProps,
} from '@mui/material';

export type MHFMultipleSelectProps = {
  // Required Props
  control: Control<any>;
  labelId: string;
  label: string;
  name: string;
  selectItemList: Array<any>;

  // Optional Props
  autoWidth?: boolean;
  color?: SelectProps['color'];
  classes?: object;
  defaultOpen?: boolean;
  defaultValue?: any;
  formControlSx?: SxProps<Theme>;
  formHelperTextErrorSx?: SxProps<Theme>;
  formHelperTextSx?: SxProps<Theme>;
  fullWidth?: boolean;
  helperText?: string;
  IconComponent?: React.ElementType;
  id?: string;
  input?: React.ReactElement;
  inputLabelSx?: SxProps<Theme>;
  inputProps?: object;
  MenuProps?: object;
  native?: boolean;
  renderValue?: (value: any) => React.ReactNode;
  required?: boolean;
  rules?: object;
  SelectDisplayProps?: object;
  shrink?: boolean;
  sx?: SxProps<Theme>;
  variant?: 'filled' | 'outlined' | 'standard';
};

const MHFMultipleSelect = ({
  color,
  classes,
  formControlSx,
  formHelperTextSx,
  formHelperTextErrorSx,
  fullWidth,
  helperText,
  id,
  inputLabelSx,
  label,
  labelId,
  native,
  required,
  shrink,
  variant,
  name,
  defaultValue,
  control,
  rules,
  selectItemList,
  ...rest
}: MHFMultipleSelectProps) => {
  return (
    <FormControl
      color={color}
      required={required}
      fullWidth={fullWidth}
      classes={classes}
      variant={variant}
      sx={formControlSx}
    >
      <InputLabel
        shrink={shrink}
        id={labelId}
        classes={classes}
        sx={inputLabelSx}
        htmlFor={id}
      >
        {label}
      </InputLabel>

      <Controller
        name={name}
        defaultValue={defaultValue ? defaultValue : []}
        control={control}
        rules={rules}
        render={({ field: { ref, ...restField }, fieldState }) => (
          <>
            <Select
              {...restField}
              {...rest}
              native={native}
              labelId={labelId}
              label={label}
              multiple
              error={fieldState?.error ? true : false}
              inputRef={ref}
            >
              {native ? (
                ''
              ) : (
                <MenuItem value={''}>
                  <em>None</em>
                </MenuItem>
              )}

              {selectItemList.map((item, key) =>
                native ? (
                  <option key={key} value={item}>
                    {item}
                  </option>
                ) : (
                  <MenuItem key={key} value={item}>
                    {item}
                  </MenuItem>
                )
              )}
            </Select>
            {fieldState?.error && (
              <FormHelperText sx={formHelperTextErrorSx || { color: 'red' }}>
                {fieldState?.error?.message || 'Invalid Input'}
              </FormHelperText>
            )}
            {helperText && (
              <FormHelperText sx={formHelperTextSx}>
                {helperText}
              </FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default MHFMultipleSelect;
