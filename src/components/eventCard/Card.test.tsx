import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Card from "./Card";
import EventDetails from "../eventDetails/EventDetails";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={store}>
      <Card />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});
describe("Tester for Card component", () => {
  test("CARD- renders Card component without errors", () => {});
  test('CARD - Test if Card component has text with expected word "ALL EVENTS"', () => {
    const heading = screen.getByText(/ALL EVENTS/);
    expect(heading).toBeInTheDocument();
  });
  test('CARD - Test if date is pass render "Passed" text in card', () => {
    const pastText = screen.getAllByText("Passed");
    expect(pastText).toHaveLength(3);
  });
  test('CARD - Test if click "see more" button render specific event details', () => {
    const cards = screen.getAllByTestId("itemSeeMore");
    const card1 = cards[0];
    userEvent.click(card1);
    render(
      <MemoryRouter initialEntries={["/event/1"]}>
        <Provider store={store}>
          <Routes>
            <Route path={"/event/:id"} element={<EventDetails />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
  });
});
