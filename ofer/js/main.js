// Build checkout links with dynamic domain + URL params
(function () {
    var host = window.location.hostname.replace(/^www\./, '');
    var base = 'https://lp.' + host + '/';
    var params = window.location.search || '';
    function rewrite(el) {
        var href = el.getAttribute('href');
        if (href && href.indexOf('click/') === 0) {
            el.href = base + href + params;
        }
    }
    document.querySelectorAll('a[href^="click/"]').forEach(rewrite);
    // Watch for dynamically added links (quiz results, etc.)
    var obs = new MutationObserver(function () {
        document.querySelectorAll('a[href^="click/"]').forEach(rewrite);
    });
    obs.observe(document.body, { childList: true, subtree: true });
})();
