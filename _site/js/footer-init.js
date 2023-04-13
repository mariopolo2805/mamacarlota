var footer = function () {
    // Get the terms markdown, compile it to HTML and append it to the page
    function loadTerms(path) {
        var converter = new showdown.Converter();
        var result = null;
        $.ajax({
            url: path,
            type: 'get',
            dataType: 'html',
            success: function (data) {
                $('#include-terms').append(converter.makeHtml(data));
            }
        });
    }
    return {
        loadTerms: loadTerms
    };
}();