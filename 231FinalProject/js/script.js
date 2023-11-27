$(document).ready(function () {
    console.log("Page fully loaded and parsed");

    $(".module").click(function () {
        $(this).toggleClass("active");
        $(this).next(".module-content").slideToggle("slow");
    });
});
