import {render ,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from '../Home/Home';


beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
         <Home />
      </Provider>,
      {wrapper:MemoryRouter}
    )
  })
describe('Tester for header component',()=>{
    test('HEADER- renders Header component without errors', () => {})
    test('HEADER - full header rendering/navigating', () => {
        const leftClick = {button: 0}
        userEvent.click(screen.getByText(/About us/i), leftClick)
        expect(screen.getByText(/About us/i)).toBeInTheDocument()
      })
})


