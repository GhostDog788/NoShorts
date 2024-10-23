/**
 * This file is the main script of the extension.
 * Whenever a url of youtube loads this script runs.
 */

// Run the function when the page is loaded
window.addEventListener('load', removeShortsAll);

// Observe for dynamically loaded content that might include new <a> tags
const observer = new MutationObserver(() => {
    removeShortsAll();
});

// Observe changes to the body element to catch dynamic content loading
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
