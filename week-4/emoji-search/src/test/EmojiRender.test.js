import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("emoji-list-render", () => {
  // Test to verify rendering of emoji list
  test("Emoji list render", () => {
    render(<App />);
    
    // Get all elements representing individual emoji rows
    const emojiList = screen.getAllByTestId("emoji-row");
    const expectedEmojiCount = 20;
    expect(emojiList.length).toBe(expectedEmojiCount);
  });
});
