import {render ,screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TopEvent from './TopEvent';


beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
         <TopEvent />
      </Provider>,
      {wrapper:MemoryRouter}
    )
  })
describe('Tester for topEvent component',()=>{
    test('TOPEVENT- renders topEvent component without errors', () => {})
    test('TOPEVENT - Test if topEvent component has text with expected word "Leif Holmstrand - From the Depth"', () => {
        const heading = screen.getByText(/Leif Holmstrand - From the Depth/);
        expect(heading).toBeInTheDocument();
      })
})
