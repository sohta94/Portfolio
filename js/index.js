$(function() {
    $.when(
    $(".page-title").fadeIn(900)
    ).done(function() {
        $(".button").fadeIn(300);
        $(".attension").fadeIn(300);
    }).fail(function() {
		console.log("Error occurred.")
    });
});