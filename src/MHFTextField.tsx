import React from 'react'
import { SxProps, TextField, Theme, TextFieldProps } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

export type MHFTextFieldProps = {
  // Required Props
  control: Control<any>
  name: string

  //Optional Prop
  autoComplete?: string
  autoFocus?: boolean
  classes?: object
  color?: TextFieldProps['color']
  defaultValue?: any
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  FormHelperTextProps?: object
  helperText?: string
  id?: string
  InputLabelProps?: object
  inputProps?: object
  InputProps?: object
  label?: string
  margin?: 'dense' | 'none' | 'normal'
  maxRows?: number | string
  minRows?: number | string
  multiline?: boolean
  placeholder?: string
  required?: boolean
  rows?: number | string
  rules?: object
  size?: 'small' | 'medium' | undefined
  sx?: SxProps<Theme>
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'datetime'
    | 'email'
    | 'file'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'

  variant?: 'filled' | 'outlined' | 'standard'
}

const MHFTextField = ({
  control,
  name,
  defaultValue,
  rules,
  helperText,
  ...rest
}: MHFTextFieldProps) => {
  return (
    <Controller
      defaultValue={defaultValue ? defaultValue : ''}
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          error={fieldState?.error ? true : false}
          helperText={
            fieldState?.error
              ? fieldState?.error?.message || 'Invalid Input'
              : helperText
          }
        />
      )}
    />
  )
}

export default MHFTextField
