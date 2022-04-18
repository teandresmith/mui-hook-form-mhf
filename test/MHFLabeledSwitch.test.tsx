import * as ReactDOM from 'react-dom';
import MHFLabeledSwitch from '../src/MHFLabeledSwitch';
import { RHFControl } from './RHFControl';

describe('MHFLabeledSwitch', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFLabeledSwitch
        name="MHFLabeledSwitch"
        control={RHFControl()}
        label="MHFLabeledSwitch"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
