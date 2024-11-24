(function () {
    if (!document.querySelector('meta[name="viewport"]')) {
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1";
        document.head.appendChild(meta);
    }
})();
