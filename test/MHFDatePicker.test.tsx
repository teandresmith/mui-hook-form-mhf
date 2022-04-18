import React from 'react';
import * as ReactDOM from 'react-dom';
import MHFDatePicker from '../src/MHFDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterMoment from '@date-io/moment';
import { RHFControl } from './RHFControl';

describe('MHFDatePicker', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MHFDatePicker name="MHFDatePicker" control={RHFControl()} />
      </LocalizationProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
