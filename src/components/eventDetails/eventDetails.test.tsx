import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import EventDetails from "./EventDetails";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
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

describe("Tester for Details component", () => {
  test("DETAILS- renders Details component with specific params", () => {});
  test("DETAILS - displays the meetup title", async () => {
    const title = await screen.findByRole("heading", {
      name: "Leif Holmstrand - From the Depth",
    });
    expect(title).toBeInTheDocument();
  });
  test("DETAILS - displays the  date", () => {
    const date = screen.getByText("Date: 1/19/2022", { exact: false });
    expect(date).toBeInTheDocument();
  });

  test("DETAILS - displays the address", () => {
    const address = screen.getByText(
      "Address: Marabouparken konsthall, Löfströmsvägen 8, Stockholm",
      { exact: false }
    );
    expect(address).toBeInTheDocument();
  });
  test('DETAILS - Test if click "intresst" button, seets -1', () => {
    const numberOfSeats = screen.getByTestId("detailsSeats");

    expect(numberOfSeats).toContainHTML(
      '<p class="seats" data-testid="detailsSeats">Attend: 100 seats</p>'
    ); // find a way to reset tests in between

    const attendBtn = screen.getByRole("button", { name: "Interest" });
    userEvent.click(attendBtn);
    
    const updatedNumberOfSeats = screen.getByTestId("detailsSeats");
    expect(updatedNumberOfSeats).toContainHTML(
      '<p class="seats" data-testid="detailsSeats">Attend: 99 seats</p>'
    );
  });
});
