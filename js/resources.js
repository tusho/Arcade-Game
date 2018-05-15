// This file eases the process of loading images so that they can be used within the game.
// It also includes a simple "caching" layer so it will reuse cached images if the game attempts
// to load the same image multiple times.

(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Publicly accessible image loading function.

    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {

            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {

            _load(urlOrArr);
        }
    }

    // This is the image loader function, which is called by the public image loader function.

    function _load(url) {
        if(resourceCache[url]) {

            return resourceCache[url];
        } else {

            var img = new Image();
            img.onload = function() {

                resourceCache[url] = img;

                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };

            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
