/**
 * SUL Link Adder Script for MediaWiki
 * Developed by Saroj
 * Creation Date: 13:56, 10 November 2023
 *
 * This script adds a 'SUL' (Single User Login) link to the page actions toolbar
 * on user-related MediaWiki pages, allowing quick access to the Special:CentralAuth page.
 */

mw.loader.using(['mediawiki.util']).then(function () {
    // Get the current page title
    var pageTitle = mw.config.get('wgTitle');

    // Extract username from the page title, depending on the namespace
    var username = pageTitle.split('/')[mw.config.get('wgNamespaceNumber') === 2 || mw.config.get('wgNamespaceNumber') === 3 ? 0 : 1];

    // Check if the current page is a user-related page
    if (mw.config.get('wgNamespaceNumber') === 2 || mw.config.get('wgNamespaceNumber') === 3 || mw.config.get('wgCanonicalSpecialPageName') === 'Contributions') {
        // Add a 'SUL' link to the page actions toolbar
        var sulLink = mw.util.addPortletLink(
            'p-cactions',
            mw.util.getUrl('Special:CentralAuth/' + username),
            'SUL',
            'ca-sul',
            'SUL',
            null,
            '#ca-sul'
        );
    }
});
          
