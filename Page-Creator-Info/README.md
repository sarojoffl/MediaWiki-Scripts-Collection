# PageCreatorInfo.js

`PageCreatorInfo.js` is a MediaWiki script designed to enhance the user experience by displaying the creator's name and their total number of edits for each MediaWiki page. It's particularly useful in environments where tracking page authorship and contributor activity is important.

## Features

- **Display Page Creator**: Fetches and shows the name of the creator of the current MediaWiki page.
- **Show Edit Count**: Displays the total number of edits made by the page creator on the site.

## Installation

To install this script on your MediaWiki site:

1. **Download**: Get the `PageCreatorInfo.js` file.
2. **Place the Script**: Store it in the appropriate script directory of your MediaWiki installation.
3. **Include the Script**: Add it to your MediaWiki's common JavaScript file (typically at `MediaWiki:Common.js`) or in your personal JavaScript page (like `User:YourUsername/common.js`).

## Usage

Once the script is installed, it operates automatically when a page is viewed. The information about the page creator and their edit count is displayed neatly below the title bar of each page.

## Script Details

The script executes in the following manner:

1. **Initialization**: It runs when the document is ready and only in view mode.
2. **API Calls**: It makes AJAX calls to the MediaWiki API to fetch the creator's name and edit count.
3. **Information Display**: The script dynamically generates and adds a section below the title bar to display the creator's information.

## Contributing

Feel free to contribute to the development of `PageCreatorInfo.js`:

1. Fork this repository.
2. Make your changes or improvements.
3. Submit a pull request with your updates.

Your contributions are appreciated and help improve this tool for all users.

## License

This script is released under the MIT License. For more details, see the [LICENSE](../LICENSE) file in the root of the repository.
