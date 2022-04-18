import * as ReactDOM from 'react-dom';
import MHFCheckbox from '../src/MHFCheckbox';
import { RHFControl } from './RHFControl';

describe('MHFCheckbox', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFCheckbox name="MHFCheckbox" control={RHFControl()} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
