// Function to find and remove all <a> tags with title "Shorts"
function removeShortsLinks() {
    // Select all <a> elements with title attribute "Shorts"
    const shortsLinks = document.querySelectorAll('a[title="Shorts"]');

    shortsLinks.forEach(link => {
        // Remove each found link
        link.remove();
        console.log("Removed an <a> tag with title 'Shorts'.");
    });
}

function removeShortsVideos() {
    // Select all <a> elements with title attribute "Shorts"
    const shortsVideos = document.querySelectorAll('ytm-shorts-lockup-view-model-v2');

    shortsVideos.forEach(link => {
        // Remove each found link
        link.remove();
        console.log("Removed a short video.");
    });
}

// Run the function when the page is loaded
window.addEventListener('load', removeShortsLinks);

// Observe for dynamically loaded content that might include new <a> tags
const observer = new MutationObserver(() => {
    removeShortsLinks();
    removeShortsVideos();
});

// Observe changes to the body element to catch dynamic content loading
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
