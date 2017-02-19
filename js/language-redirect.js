(function(window, $) {
    var languageRegex = /^([^-]+)/ig;

    $(function() {
        if ($("#site-languages-json").length > 0) {
            var languages = JSON.parse($("#site-languages-json").html() || "{}");
            var navlang = navigator.language || navigator.userLanguage;
            if ((match = languageRegex.exec(navlang))) {
                var language = match[1];
                // If the user language is in the list of the available languages
                var path = "";
                if (languages.hasOwnProperty(language)) {
                    path = languages[language];
                    window.location.replace(path);
                }
                // ES by default
                else {
                    path = languages['es'];
                }
            }
        }
    });
})(window, jQuery);