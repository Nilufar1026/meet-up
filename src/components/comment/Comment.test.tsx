import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Comment from "./Comment";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={store}>
      <Comment />
    </Provider>,
    { wrapper: MemoryRouter }
  );
});
describe("Tester for Comment component", () => {
  test("COMMENT- renders Comment component without errors", () => {});
  test("DETAILS - displays the comments after write text in input and clicked Add comment button", () => {
    const commentInput = screen.getByPlaceholderText("Write you comment");
    const addCommentBtn = screen.getByRole("button", { name: "Add comennt" });
    userEvent.type(commentInput, "This is a comment test");
    userEvent.click(addCommentBtn);
    const updatedCommentsList = screen.queryAllByTestId("detailsComment");
    expect(updatedCommentsList).toHaveLength(1);
    expect(updatedCommentsList[0]).toHaveTextContent("This is a comment test");
  });
});
