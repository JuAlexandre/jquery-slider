$(document).ready(function () {
    $('#left').click(function() {
        $("#slide ul").animate({ marginLeft: -200 }, 800, function() {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        });
    });

    $('#right').click(function(){
        $("#slide ul").animate({ marginLeft: 200 }, 800, function() {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        });
    });

    setInterval(function(){
        $("#slide ul").animate({ marginLeft: -350 }, 800, function() {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        })
    }, 3500);
});