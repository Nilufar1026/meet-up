import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { screen } from '@testing-library/react'


beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    {wrapper:MemoryRouter}
  )
})


describe("Tester for App Component", () => {
  test('App - renders App component without errors', () => {})
  test("APP - Test if Home Screen renders into App Component initially", () => {
    const logoTitle = screen.getByText(/Stockholm Events/i)
    expect(logoTitle).toBeInTheDocument()
  }); 
});





