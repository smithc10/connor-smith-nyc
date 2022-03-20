import { render, screen } from "@testing-library/react";
import App from "./App";

//  broken need to refactor and write entire unit test suite
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
