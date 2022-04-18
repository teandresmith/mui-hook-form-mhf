import * as ReactDOM from 'react-dom';
import MHFMultipleSelect from '../src/MHFMultipleSelect';

import { RHFControl } from './RHFControl';

describe('MHFMultipleSelect', () => {
  it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MHFMultipleSelect
        name="MHFMultipleSelect"
        control={RHFControl()}
        selectItemList={['option1', 'option2', 'option3']}
        label={'MHFMultipleSelect'}
        labelId={'label-id'}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
