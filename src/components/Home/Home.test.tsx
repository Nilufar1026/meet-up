import {render ,screen} from '@testing-library/react'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
         <Home />
      </Provider>,
      {wrapper:MemoryRouter}
    )
  })
  
describe('Tester for Home component',()=>{
    test('HOME- renders Home component without errors', () => {})
    test('HOME - Test if Home component has text with expected word "ALL EVENTS"', () => {
        const heading = screen.getByText(/ALL EVENTS/);
        expect(heading).toBeInTheDocument();
      })
})
