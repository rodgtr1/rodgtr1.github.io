(function () {
  
    // Fix scrolling issue on Mobile Safari.
    if ($(window).width() < 768) {
        $(window).scrollTop(0);
    }

    // Make external links open in a new tab/window.
    (function () {
        var urlRegExp = new RegExp('^(\/|(https?:)?\/\/' + window.location.host + ')');
        $('a').each(function () {
            var $a = $(this);
            if (!urlRegExp.test($a.attr('href'))) {
                $a.attr('target', '_blank');
            }
        });
    })();

});
