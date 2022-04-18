import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  SxProps,
  Theme,
  CheckboxProps,
} from '@mui/material'
import { Control, Controller } from 'react-hook-form'

export type MHFLabeledCheckboxProps = {
  //Required Props
  control: Control<any>
  label: string
  name: string

  //Optional Props
  checkedIcon?: React.ReactNode
  classes?: object
  color?: CheckboxProps['color']
  defaultChecked?: boolean
  disabled?: boolean
  disableRipple?: boolean
  icon?: React.ReactNode
  id?: string
  indeterminate?: boolean
  indeterminateIcon?: React.ReactNode
  inputProps?: object
  inputRef?: React.Ref<any>
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top'
  required?: boolean
  size?: 'medium' | 'small' | undefined
  sx?: SxProps<Theme>
  rules?: object
}

const MHFLabeledCheckbox = ({
  name,
  control,
  checkedIcon,
  color,
  defaultChecked,
  disabled,
  disableRipple,
  icon,
  id,
  indeterminate,
  indeterminateIcon,
  inputProps,
  required,
  rules,
  size,
  ...rest
}: MHFLabeledCheckboxProps) => {
  return (
    <Controller
      defaultValue={defaultChecked ? defaultChecked : false}
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControlLabel
          {...field}
          {...rest}
          control={
            <Checkbox
              checkedIcon={checkedIcon}
              color={color}
              defaultChecked={defaultChecked}
              disabled={disabled}
              disableRipple={disableRipple}
              icon={icon}
              id={id}
              indeterminate={indeterminate}
              indeterminateIcon={indeterminateIcon}
              inputProps={inputProps}
              required={required}
              size={size}
            />
          }
        />
      )}
    />
  )
}

export default MHFLabeledCheckbox
