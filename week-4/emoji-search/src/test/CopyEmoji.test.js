import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Emoji Copy', () => {
  test('Copies emoji when clicked', async () => {
    render(<App />);

    // Click action
    const emojiToCopy = screen.getByText('😊');
    userEvent.click(emojiToCopy);

    // Retrieving copied text
    const clipboardContent = await navigator.clipboard.readText();
    
    // Checking of the copied text
    expect(clipboardContent).toBe('😊');
  });
});
