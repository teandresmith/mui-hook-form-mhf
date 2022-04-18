import React from 'react';
import * as ReactDOM from 'react-dom';
import MHFTimePicker from '../src/MHFTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterMoment from '@date-io/moment';
import { RHFControl } from './RHFControl';

describe('MHFTimePicker', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MHFTimePicker name="MHFTimePicker" control={RHFControl()} />
      </LocalizationProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
