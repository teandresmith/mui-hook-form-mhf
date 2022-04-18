import * as ReactDOM from 'react-dom';
import MHFRating from '../src/MHFRating';
import { RHFControl } from './RHFControl';

describe('MHFRating', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MHFRating name="MHFRating" control={RHFControl()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
