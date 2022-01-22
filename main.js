// _fn is a unique identifier to identify variables for this page only.
// TODO: Upload of orange Farhan here
// TODO: Create class called photo and set dimensions of the photos
// TODO: Import jQuery

// Create and append photo to body
$("body").on("click", function(event) {
    // Create photo div
    let $photo = $("<img>");
    $photo.attr("src", "Fun/Farhan.jpeg");
    $photo.addClass("photo");
    $("body").append($photo);

    // Position div based on click
    $photo.css("top", event.pageY);
    $photo.css("left", event.pageX);

    console.log(event);
});
