import filterEmoji from "../filterEmoji";

describe('Search Emoji', () => { 
    let searchInput;

    // Before each test case, render the App component and assign the input element for search
    beforeEach(() => {
        render(<App/>);
        searchInput = screen.getByLabelText("inputTest");
    });
    
    // Test to verify filtering of emoji list after entering text
    test("Filtering emoji list after inputting text", () => {
        const searchText = "Grinning";
        userEvent.type(searchInput, searchText);
        const filteredEmojiList = screen.getByTestId("filtered-emoji-list");
        expect(filteredEmojiList).toBeInTheDocument();
        expect(screen.getByText(searchText)).toBeInTheDocument();
    });
});
