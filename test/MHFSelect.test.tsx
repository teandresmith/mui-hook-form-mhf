import React from 'react';
import * as ReactDOM from 'react-dom';
import MHFSelect from '../src/MHFSelect';

import { RHFControl } from './RHFControl';

describe('MHFSelect', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFSelect
        name="MHFSelect"
        control={RHFControl()}
        selectItemList={['option1', 'option2']}
        label="MHFSelect"
        labelId="label-id"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
