# Mui-Hook-Form (MHF)

MHF is an opinionated use case of React Hook Form (react-hook-form / RHF) and Material UI v5 (@mui/material / MUI) written in TypeScript.
MHF attempts to simplify and streamline the use of RHF and MUI by providing a set of components that users can use just as if they were normal MUI input components.
Each component supports majority of MUI's components props and also RHF Controller's 'rules' prop.
Additionally, all of the components are meant to be used as Uncontrolled components enabling RHF to handle all underlying state.

_As a reminder, MHF can only be used if react-hook-form (RHF), MUI (@mui/material), and @mui/x-date-pickers have been installed_

The following components are presented within this library:

- MHFAutocomplete
- MHFCheckbox
- MHFDatePicker
- MHFLabeledCheckbox
- MHFLabeledSwitch
- MHFMultipleSelect
- MHFRadioButtonGroup
- MHFRating
- MHFSelect
- MHFTextField
- MHFTimePicker

_In order to use the MHFTimePicker or MHFDatePicker components, they must be wrapped in a LocalizationProvider. For more information, see https://mui.com/x/react-date-pickers/getting-started/ ._

## Implementation

For a more detailed look into each component and what it may offer please visit the library's
dedicated Storybook at
https://mui-hook-form-mhf.netlify.app/?path=/story/introduction--page . Additionally,
for more information about specific MUI prop implementation, please visit the corresponding [MUI Component Docs](https://mui.com/material-ui/getting-started/installation/) for the component. Below will only present a very basic example of how to implement the library into your own component.

```js
npm install mui-hook-form-mhf
```

Each component is wrapped in the React-Hook-Form's Controller component. For that reason,
each component will need to be passed a control from the useForm hook. Besides the name and
control prop, each component within the libray behaves just as a regular MUI component would. The
only difference is that the components are meant to be used an Uncontrolled Component. The storybook docs go in further detail about the implementation.

```ts
import { MHFTextField } from 'mui-hook-form-mhf';
import { useForm } from 'react-hook-form';

const Component = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <MHFTextField name="MHFTextField" control={methods.control} />
    </form>
  );
};
```

Components such as MHFLabeledCheckbox and MHFLabeledSwitch are implemented using MUI's FormControlLabel component, so if you would like to create a group. It can easily be done by
wrapping the component with a FormGroup component like below

```ts
<FormGroup>
  <MHFLabeledCheckbox
    name="MHFLabeledCheckbox"
    control={methods.control}
    label="MHFLabeledCheckbox"
  />
</FormGroup>
```

## Links

- [Github](https://github.com/teandresmith/mui-hook-form-mhf)
- [NPM](https://www.npmjs.com/package/mui-hook-form-mhf)
- [Playground/Docs](https://mui-hook-form-mhf.netlify.app/?path=/story/introduction--page)

## Change Log

- (1.0.1) Added variant prop to MHFDatePicker.
