import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  PickersDayProps,
  DatePicker,
  CalendarPickerView,
} from '@mui/x-date-pickers';
import { ParseableDate } from '@mui/x-date-pickers/internals/models/parseableDate';
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals/models';
import { SxProps, TextField, Theme } from '@mui/material';

export type MHFDatePickerProps = {
  // Required Props
  control: Control<any>;
  name: string;

  // Optional Props
  acceptRegex?: RegExp;
  allowSameDateSelection?: boolean;
  cancelText?: React.ReactNode;
  className?: string;
  clearable?: boolean;
  clearText?: React.ReactNode;
  defaultCalendarMonth?: any;
  defaultValue?: string | null | Date;
  desktopModeMediaQuery?: string;
  DialogProps?: object;
  disableCloseOnSelect?: boolean;
  disabled?: boolean;
  disableHighlightToday?: boolean;
  disableMaskedInput?: boolean;
  disableOpenPicker?: boolean;
  fullWidth?: boolean;
  getOpenDialogAriaText?: (
    value: ParseableDate<any>,
    utils: MuiPickersAdapter<any>
  ) => string;

  getViewSwitchingButtonText?: (currentView: CalendarPickerView) => string;
  helperText?: string;
  inputAdornmentProps?: object;
  label?: string;
  leftArrowButtonText?: string;
  loading?: boolean;
  mask?: string;
  maxDate?: any;
  minDate?: any;
  okText?: React.ReactNode;
  onAccept?: (date: any) => void;
  onError?: (reason: any, value: any) => void;
  onMonthChange?: (month: Date) => void;
  onViewChange?: (view: CalendarPickerView) => void;
  onYearChange?: (year: Date) => void;
  open?: boolean;
  OpenPickerButtonProps?: object;
  openTo?: 'day' | 'month' | 'year';
  orientation?: 'landscape' | 'portrait';
  PaperProps?: object;
  PopperProps?: object;
  readOnly?: boolean;
  reduceAnimations?: boolean;
  renderDay?: (
    day: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ) => JSX.Element;
  renderLoading?: () => React.ReactNode;
  required?: boolean;
  rifmFormatter?: (str: string) => string;
  rightArrowButtonText?: string;
  rules?: object;
  showDaysOutsideCurrentMonth?: boolean;
  showTodayButton?: boolean;
  showToolbar?: boolean;
  sx?: SxProps<Theme>;
  todayText?: React.ReactNode;
  ToolbarComponent?: React.JSXElementConstructor<any>;
  toolbarFormat?: string;
  toolbarPlaceholder?: React.ReactNode;
  toolbarTitle?: React.ReactNode;
  TransitionComponent?: React.JSXElementConstructor<any>;
  variant?: 'standard' | 'filled' | 'outlined';
  views?: Array<'day' | 'month' | 'year'>;
};

const MHFDatePicker = ({
  control,
  name,
  defaultValue,
  fullWidth,
  helperText,
  required,
  rules,
  sx,
  variant,
  ...rest
}: MHFDatePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : null}
      rules={rules}
      render={({ field: { ref, ...restField }, fieldState }) => (
        <DatePicker
          {...restField}
          {...rest}
          inputRef={ref}
          renderInput={(params) => (
            <TextField
              {...params}
              required={required}
              fullWidth={fullWidth}
              helperText={
                fieldState?.error
                  ? fieldState?.error?.message || 'Invalid Date'
                  : helperText
              }
              error={fieldState?.error ? true : false}
              sx={sx}
              variant={variant}
            />
          )}
        />
      )}
    />
  );
};

export default MHFDatePicker;
