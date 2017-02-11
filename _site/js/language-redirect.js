(function(wnd, $) {
    var languageRegex = /^([^-]+)/ig;

    $(function() {
        if ($("#site-languages-json").length > 0) {
            var languages = JSON.parse($("#site-languages-json").html() || "{}");
            console.log(languages);
            var navlang = navigator.language || navigator.userLanguage;
            if ((match = languageRegex.exec(navlang))) {
                var language = match[1];

                // If the user language is in the list of the available languages
                var path = "";
                if (languages.hasOwnProperty(language)) {
                    path = languages[language];
                    wnd.location.replace(path);
                }
                // ES by default
                else {
                    path = languages['es'];
                }
            }
        }
    });
})(window, jQuery);