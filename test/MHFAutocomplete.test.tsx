import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MHFAutocomplete from '../src/MHFAutocomplete';
import { RHFControl } from './RHFControl';

describe('MHFAutocomplete', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFAutocomplete
        name="MHFAutocomplete"
        control={RHFControl()}
        options={['option1', 'options2']}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
