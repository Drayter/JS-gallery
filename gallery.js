/* Name this external file gallery.js */

function upDate(previewPic) {
    console.log("Event triggered: Focused/Hovered over image");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Requirement 8 & 9: Onload function to add tabindex automatically
function addTabIndex() {
    console.log("Page loaded: Initializing tabindex for images.");

    // Query all elements with the 'preview' class
    let images = document.querySelectorAll(".preview");

    // Loop through each image and add tabindex="0"
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
