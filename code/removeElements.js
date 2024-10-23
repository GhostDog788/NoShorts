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