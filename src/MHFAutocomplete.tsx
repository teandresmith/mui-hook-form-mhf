import React from 'react';
import { Controller, Control } from 'react-hook-form';
import {
  AutocompleteRenderGroupParams,
  Autocomplete,
  TextField,
  SxProps,
  Theme,
} from '@mui/material';

export type MHFAutocompleteProps = {
  // Required Props
  control: Control<any>;
  name: string;
  options: Array<any>;

  // Optional Props
  autoComplete?: boolean;
  autoHighlight?: boolean;
  autoSelect?: boolean;
  blurOnSelect?: 'mouse' | 'touch' | boolean;
  ChipProps?: object;
  classes?: object;
  clearIcon?: React.ReactNode;
  clearOnBlur?: boolean;
  clearOnEscape?: boolean;
  clearText?: string;
  closeText?: string;
  componentsProps?: { clearIndicator?: object; paper?: object };
  defaultValue?: any;
  disableClearable?: any | boolean;
  disableCloseOnSelect?: boolean;
  disabled?: boolean;
  disabledItemsFocusable?: boolean;
  disableListWrap?: boolean;
  disablePortal?: boolean;
  filterOptions?: (options: Array<any>, state: object) => Array<typeof options>;
  filterSelectedOptions?: boolean;
  forcePopupIcon?: 'auto' | boolean;
  freeSolo?: any | boolean;
  fullWidth?: boolean;
  getLimitTagsText?: (more: number) => React.ReactNode;
  getOptionDisabled?: (option: any) => boolean;
  getOptionLabel?: (option: any) => string;
  groupBy?: (option: any) => string;
  handleHomeEndKeys?: boolean;
  helperText?: string;
  id?: string;
  includeInputInList?: boolean;
  inputValue?: string;
  inputProps?: object;
  isOptionEqualToValue?: (option: any, value: typeof option) => boolean;
  label?: string;
  limitTags?: number;
  ListboxComponent?: React.JSXElementConstructor<any>;
  ListboxProps?: object;
  loading?: boolean;
  loadingText?: React.ReactNode;
  noOptionsText?: React.ReactNode;
  onClose?: (event: React.SyntheticEvent, reason: string) => void;
  onHighlightChange?: (
    event: React.SyntheticEvent,
    option: any,
    reason: string
  ) => void;
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
    reason: string
  ) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  open?: boolean;
  openOnFocus?: boolean;
  openText?: string;
  PaperComponent?: React.JSXElementConstructor<any>;
  PopperComponent?: React.JSXElementConstructor<any>;
  popupIcon?: React.ReactNode;
  readOnly?: boolean;
  renderGroup?: (params: AutocompleteRenderGroupParams) => React.ReactNode;
  renderOption?: (props: object, option: any, state: object) => React.ReactNode;
  renderTags?: (value: Array<any>, getTagProps: Function) => React.ReactNode;
  required?: boolean;
  rules?: object;
  selectOnFocus?: boolean;
  size?: 'small' | 'medium';
  sx?: SxProps<Theme>;
  variant?: 'standard' | 'outlined' | 'filled';
};

const MHFAutocomplete = ({
  control,
  name,
  options,
  defaultValue,
  freeSolo,
  helperText,
  label,
  onInputChange,
  required,
  rules,
  variant,
  ...rest
}: MHFAutocompleteProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? defaultValue : ''}
      rules={rules}
      render={({ field, fieldState }) => (
        <Autocomplete
          {...field.ref}
          {...rest}
          onBlur={field.onBlur}
          value={field.value}
          onChange={(e, data: any) => field.onChange(data)}
          options={options}
          onInputChange={freeSolo ? field.onChange : onInputChange}
          renderInput={(params: any) => (
            <TextField
              {...params}
              variant={variant}
              label={label}
              required={required}
              helperText={
                fieldState?.error
                  ? fieldState?.error?.message || 'Invalid Input'
                  : helperText
              }
              error={fieldState?.error ? true : false}
            />
          )}
        />
      )}
    />
  );
};

export default MHFAutocomplete;
