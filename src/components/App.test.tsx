import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import TopBar from "./TopBar/TopBar";

describe("testing for App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByTestId(/app/);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("testing for the TopBar", function () {
  test("TopBar gets rendered with button and title", () => {
    render(<App />);
    const headerElement = screen.getByText(/battleship/i);
    const topBarButton = screen.getByText(/new game/i);

    expect(headerElement).toBeInTheDocument();
    expect(topBarButton).toBeInTheDocument();
  });

  test("new game button refreshes the screen", () => {
    const mockOnClick = jest.fn();

    render(<TopBar title={"title"} newGame={mockOnClick} />);

    const topBarButton = screen.getByText(/new game/i);

    userEvent.click(topBarButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
