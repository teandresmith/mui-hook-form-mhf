import React from 'react'
import { Controller, Control } from 'react-hook-form'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SxProps,
  Theme,
  FormHelperText,
  SelectProps,
} from '@mui/material'

export type MHFSelectProps = {
  // Required Props
  name: string
  control: Control<any>
  selectItemList: Array<any>
  labelId: string
  label: string

  // Optional Props
  autoWidth?: boolean
  color?: SelectProps['color']
  classes?: object
  defaultOpen?: boolean
  defaultValue?: any
  formControlSx?: SxProps<Theme>
  fullWidth?: boolean
  helperText?: string
  IconComponent?: React.ElementType
  id?: string
  input?: React.ReactElement
  inputLabelSx?: SxProps<Theme>
  inputProps?: object
  MenuProps?: object
  native?: boolean
  renderValue?: (value: any) => React.ReactNode
  required?: boolean
  rules?: object
  SelectDisplayProps?: object
  sx?: SxProps<Theme>
  variant?: 'filled' | 'outlined' | 'standard'
}

const MHFSelect = ({
  color,
  classes,
  formControlSx,
  fullWidth,
  helperText,
  id,
  inputLabelSx,
  label,
  labelId,
  native,
  required,
  variant,
  name,
  defaultValue,
  control,
  rules,
  selectItemList,
  ...rest
}: MHFSelectProps) => {
  return (
    <FormControl
      color={color}
      required={required}
      fullWidth={fullWidth}
      classes={classes}
      variant={variant}
      sx={formControlSx}
    >
      <InputLabel id={labelId} classes={classes} sx={inputLabelSx} htmlFor={id}>
        {label}
      </InputLabel>

      <Controller
        name={name}
        defaultValue={defaultValue ? defaultValue : ''}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Select
              {...field}
              {...rest}
              native={native}
              labelId={labelId}
              label={label}
            >
              {native ? (
                <option value={''}></option>
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
              <FormHelperText>
                {fieldState?.error?.message || 'Invalid Input'}
              </FormHelperText>
            )}
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </>
        )}
      />
    </FormControl>
  )
}

export default MHFSelect
