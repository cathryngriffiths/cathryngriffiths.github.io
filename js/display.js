$(document).ready(function(){
    var navButtons   = $(".button");        // Navigation buttons
    var mainSections = $(".main section");      // Main content sections

    // Bind the event listeners to the navigation buttons
    navButtons.each(function(){
        $(this).on("click", function() {
            var section = $(this).attr("data-section");
            navButtons.each(function(){
                if ($(this).attr("data-section") == section) {
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                };
            })
            mainSections.each(function(){
                if ($(this).attr("data-section") == section) {
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                };
            })
        })
    })
})