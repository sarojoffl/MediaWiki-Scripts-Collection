# SUL Link Adder

This script, `sulLinkAdder.js`, is part of the MediaWiki Scripts Collection. It is designed to add a Single User Login (SUL) link to the page actions toolbar on user-related MediaWiki pages. This facilitates quick access to the Special:CentralAuth page for the viewed user, simplifying the management of global user accounts.

## Features

- Automatically adds a 'SUL' link to the page actions toolbar.
- Works on User, User talk, and Contributions pages.
- Dynamically fetches the username to generate the SUL link.

## Installation

To install this script on your MediaWiki site:

1. Download `sulLinkAdder.js` from this directory.
2. Place the script in your MediaWiki installation's appropriate script directory or folder.
3. Include the script in your MediaWiki's common JavaScript file, typically located at `MediaWiki:Common.js`, or in your personal JavaScript page like `User:YourUsername/common.js`.

## Usage

Once installed, the script runs automatically. You will see a 'SUL' link in the page actions toolbar on applicable MediaWiki pages.

## Contributing

If you have suggestions for improving this script, please feel free to fork this repository, make your changes, and submit a pull request.

## License

This script is released under the MIT License. For more details, see the [LICENSE](../LICENSE) file in the root of the repository.
