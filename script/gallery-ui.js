

var simple_gallery_scroll_pointer = 1;
var simple_gallery_content_class_array = [];

function addGalleryItems() {

    // Class Name
    var len = simple_gallery_content_class_array.length;
    var cls = "simple-gallery-item-" + (len + 1);

    var gallery = $("#gallery-content");

    var item = $("<div>");
    item.addClass("simple-gallery-item");
    item.addClass(cls);

    var text = $("<div>");
    text.addClass("simple-gallery-item-text");
    text.append((len + 1).toFixed(0));

    item.append(text);
    gallery.append(item);

    // Store name in array
    simple_gallery_content_class_array.push(cls);

}

function goToPrevGalleryItem() {

    console.log("prev");

    var pointer = simple_gallery_scroll_pointer;
    if (pointer == 1) {
        return;
    }

    // c for current focused
    // f for to be focused
    var cc = pointer;
    var c = "." + simple_gallery_content_class_array[cc - 1];
    var fc = --pointer;
    var f = "." + simple_gallery_content_class_array[fc - 1];

    simple_gallery_scroll_pointer = pointer;

    // Change Focus
    $(c).removeClass("simple-gallery-focus");
    $(f).addClass("simple-gallery-focus");

    // Slide
    var pl = $("#gallery-content").position().left;
    $("#gallery-content").css({ left: pl + 238 });
    /*
    $("#gallery-content").animate({
        left: pl + 238
    }, 500);
    */

}
function goToNextGalleryItem() {

    console.log("next");

    var pointer = simple_gallery_scroll_pointer;
    if (pointer == simple_gallery_content_class_array.length) {
        resetGallery();
        return;
    }

    // c for current focused
    // f for to be focused
    var cc = pointer;
    var c = "." + simple_gallery_content_class_array[cc - 1];
    var fc = ++pointer;
    var f = "." + simple_gallery_content_class_array[fc - 1];

    simple_gallery_scroll_pointer = pointer;

    // Change Focus
    $(c).removeClass("simple-gallery-focus");
    $(f).addClass("simple-gallery-focus");

    // Slide
    var pl = $("#gallery-content").position().left;
    $("#gallery-content").css({ left: pl - 238 });
    /*
    $("#gallery-content").animate({
        left: pl - 238
    }, 500);
    */

}
function resetGallery() {

    $(".simple-gallery-item").removeClass("simple-gallery-focus");
    $(".simple-gallery-item-1").addClass("simple-gallery-focus");

    simple_gallery_scroll_pointer = 1;
    $("#gallery-content").css({ left: "" });

}

$(document).ready(function() {

    $(".simple-gallery-nav-prev").click(function() {
        goToPrevGalleryItem();
    });
    $(".simple-gallery-nav-next").click(function() {
        goToNextGalleryItem();
    });

});