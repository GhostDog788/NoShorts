/**
 * Removes the Shorts section buttons
 * Works by finding and removing all <a> tags with title "Shorts"
 */
function removeShortsLinks() {
    const shortsLinks = document.querySelectorAll('a[title="Shorts"]');
    if (!shortsLinks) {
        console.log("Can't find links to the Shorts page");
        return;
    }

    shortsLinks.forEach(link => {
        link.remove();
        console.log("Removed an <a> tag with title 'Shorts'.");
    });
}

/**
 * Removes the Shorts videos shown when viewing a video
 * Works by removing all html elements of the custom Shorts view
 */
function removeShortsVideos() {
    const shortsVideos = document.querySelectorAll('ytm-shorts-lockup-view-model-v2');

    if (!shortsVideos) {
        console.log("Can't find Shorts videos");
        return;
    }

    shortsVideos.forEach(video => {
        // Remove each found link
        video.remove();
        console.log("Removed a Shorts video.");
    });
}

/**
 * One function that removes all Shorts functionality
 */
function removeShortsAll() {
    removeShortsLinks();
    removeShortsVideos();
}

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
