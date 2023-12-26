import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

test("Header component renders title correctly", () => {
  // Render the Header component for testing
  const { getByText } = render(<Header />);
  
  // Get the element containing the title text "Emoji Search"
  const titleElement = getByText("Emoji Search");
  
  // Assert that the title element is present in the document
  expect(titleElement).toBeInTheDocument();
});
