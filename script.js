/* Name this external file gallery.js */

function upDate(previewPic) {
    
    console.log("Event triggered: Hovered over image");

   
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