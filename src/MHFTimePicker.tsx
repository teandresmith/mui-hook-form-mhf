import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  ClockPickerView,
  TimePicker,
  TimePickerProps,
} from '@mui/x-date-pickers';
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals/models';
import { SxProps, TextField, Theme } from '@mui/material';

export type MHFTimePickerProps = {
  // Required Props
  control: Control<any>;
  name: string;

  // Optional Props
  acceptRegex?: RegExp;
  ampm?: boolean;
  ampmInClock?: boolean;
  cancelText?: React.ReactNode;
  className?: string;
  clearable?: boolean;
  clearText?: React.ReactNode;
  components?: object;
  defaultValue?: Date | string | number | null;
  desktopModeMediaQuery?: string;
  DialogProps?: object;
  disableCloseOnSelect?: boolean;
  disabled?: boolean;
  disableIgnoringDatePartForTimeValidation?: boolean;
  disableMaskedInput?: boolean;
  disableOpenPicker?: boolean;
  fullWidth?: boolean;
  getClockLabelText?: (
    view: ClockPickerView,
    time: Date | null,
    adapter: MuiPickersAdapter<Date>
  ) => string;
  getOpenDialogAriaText?: TimePickerProps['getOpenDialogAriaText'];
  helperText?: string;
  InputAdornmentProps?: object;
  inputRef?: any;
  label?: string;
  mask?: string;
  maxTime?: any;
  minTime?: any;
  minutesStep?: number;
  okText?: React.ReactNode;
  onViewChange?: (view: ClockPickerView) => void;
  open?: boolean;
  OpenPickerButtonProps?: object;
  openTo?: 'hours' | 'minutes' | 'seconds';
  orientation?: 'landscape' | 'portrait';
  PaperProps?: object;
  PopperProps?: object;
  readOnly?: boolean;
  required?: boolean;
  rifmFormatter?: (str: string) => string;
  rules?: object;
  shouldDisableTime?: (
    timeValue: number,
    clockType: ClockPickerView
  ) => boolean;
  showTodayButton?: boolean;
  showToolbar?: boolean;
  sx?: SxProps<Theme>;
  todayText?: boolean;
  ToolbarComponent?: React.JSXElementConstructor<any>;
  toolbarFormat?: string;
  toolbarPlaceholder?: React.ReactNode;
  toolbarTitle?: React.ReactNode;
  TransitionComponent?: React.JSXElementConstructor<any>;
  views?: Array<'hours' | 'minutes' | 'seconds'>;
};

const MHFTimePicker = ({
  control,
  name,
  defaultValue,
  fullWidth,
  helperText,
  required,
  rules,
  sx,
  ...rest
}: MHFTimePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      rules={rules}
      render={({ field: { ref, ...restField }, fieldState }) => (
        <TimePicker
          {...restField}
          {...rest}
          inputRef={ref}
          renderInput={(params) => (
            <TextField
              fullWidth={fullWidth}
              required={required}
              helperText={
                fieldState?.error
                  ? fieldState?.error?.message || 'Invalid Time'
                  : helperText
              }
              error={fieldState?.error ? true : false}
              sx={sx}
              {...params}
            />
          )}
        />
      )}
    />
  );
};

export default MHFTimePicker;
