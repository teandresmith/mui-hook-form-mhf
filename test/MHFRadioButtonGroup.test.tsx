import React from 'react';
import * as ReactDOM from 'react-dom';
import MHFRadioButtonGroup from '../src/MHFRadioButtonGroup';

import { RHFControl } from './RHFControl';

describe('MHFRadioButtonGroup', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFRadioButtonGroup
        name="MHFRadioButtonGroup"
        control={RHFControl()}
        radioLabels={['happy', 'mad', 'sad', 'nothing']}
        formLabel="Emotion"
        defaultValue={'happy'}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
