import React from 'react';
import * as ReactDOM from 'react-dom';
import MHFTextField from '../src/MHFTextField';
import { RHFControl } from './RHFControl';

describe('MHFTextField', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFTextField name="MHFTextField" control={RHFControl()} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
