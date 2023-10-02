import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";

describe("checking whether a header and a input box is present in the home page or not", () => {
  it("checking whether a header is present or not", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  it("checking whether a input field is present or not", () => {
    render(<Home />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});

it("checking whether searchText state variable and setSearchText function state are working properly", () => {
  render(<Home />);
  const state = screen.getByPlaceholderText("Search for movies...");
  fireEvent.change(state, { target: { value: "Harry Potter" } });
  expect(state.value).toBe("Harry Potter");
});
