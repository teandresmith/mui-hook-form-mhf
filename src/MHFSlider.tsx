import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { Slider, SxProps, Theme, SliderProps } from '@mui/material'

export type MHFSliderProps = {
  //Required Props
  control: Control<any>
  name: string

  //Optional Props
  classes?: object
  color?: SliderProps['color']
  defaultValue?: Array<number> | number
  disabled?: boolean
  disableSwap?: boolean
  getAriaLabel?: (index: number) => string
  getAriaValueText?: (value: number, index: number) => string
  isRtl?: boolean
  marks?: Array<{ label?: string; value: number }> | boolean
  max?: number
  min?: number
  orientation?: 'horizontal' | 'vertical'
  rules?: object
  scale?: (x: any) => any
  size?: 'small' | 'medium'
  step?: number
  sx?: SxProps<Theme>
  tabIndex?: number
  track?: 'inverted' | 'normal' | false
  valueLabelDisplay?: 'auto' | 'off' | 'on'
  valueLabelFormat?: (value: number, index: number) => React.ReactNode | string
}

const MHFSlider = ({
  control,
  name,
  defaultValue,
  rules,
  ...rest
}: MHFSliderProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : 50}
      rules={rules}
      render={({ field }) => <Slider {...field} {...rest} />}
    />
  )
}

export default MHFSlider
