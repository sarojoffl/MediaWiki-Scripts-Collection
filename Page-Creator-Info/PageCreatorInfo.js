/**
 * PageCreatorInfo.js
 * Developer: Saroj
 * Date: 2023-12-26
 * 
 * This script fetches and displays the name of the creator of a MediaWiki page along with 
 * their total number of edits on the site. It is designed for MediaWiki environments.
 */

$(document).ready(function() {
    // Only execute in view mode
    if (mw.config.get('wgAction') === "view") {
        var apiURL = mw.config.get('wgServer') + mw.config.get('wgScriptPath') + '/api.php';
        var wikiURL = mw.util.getUrl('');

        // Fetches the creator of the current page
        function fetchPageCreator() {
            $.ajax({
                url: apiURL,
                data: {
                    action: 'query',
                    format: 'json',
                    titles: mw.config.get('wgPageName'),
                    prop: 'revisions',
                    rvlimit: 1,
                    rvdir: 'newer',
                    rvprop: 'user'
                },
                dataType: 'json',
                success: function(response) {
                    var pageId = Object.keys(response.query.pages)[0];
                    fetchUserEditCount(response.query.pages[pageId].revisions[0].user);
                }
            });
        }

        // Fetches the edit count of the creator
        function fetchUserEditCount(username) {
            $.ajax({
                url: apiURL,
                data: {
                    action: 'query',
                    format: 'json',
                    list: 'users',
                    ususers: username,
                    usprop: 'editcount'
                },
                dataType: 'json',
                success: function(response) {
                    displayCreator(username, response.query.users[0].editcount);
                }
            });
        }

        // Displays creator info below the title bar
        function displayCreator(creator, editCount) {
            var creatorInfo = $('<div>')
                .append('Page created by: ')
                .append($('<a>').attr('href', wikiURL + 'User:' + encodeURIComponent(creator)).text(creator).css({'color': '#0645ad'}))
                .append(' (')
                .append($('<a>').attr('href', wikiURL + 'Special:Contributions/' + encodeURIComponent(creator)).text(editCount + ' edits').css({'color': '#0645ad'}))
                .append(')')
                .css({'font-size': '84%', 'color': '#666', 'margin-top': '5px'});

            $('#bodyContent').prepend(creatorInfo);
        }

        fetchPageCreator();
    }
});
