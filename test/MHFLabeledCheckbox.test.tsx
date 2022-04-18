import React from 'react';
import * as ReactDOM from 'react-dom';
import MHFLabeledCheckbox from '../src/MHFLabeledCheckbox';
import { RHFControl } from './RHFControl';

describe('MHFLabeledCheckbox', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFLabeledCheckbox
        name="MHFLabeledCheckbox"
        control={RHFControl()}
        label={'MHFLabeledCheckbox'}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
