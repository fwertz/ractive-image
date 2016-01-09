module.exports = function ( node, fire ) {

    var timeThreshold = 300; // Interval time to check for element visibility
    var inViewport;
    // Check if element visible in Viewport
    // Credits : @RobG at http://stackoverflow.com/questions/25779234/adjust-inview-calculation-of-an-element#25779542

    // Return true if an element inside its parents and the viewport
    function isVisible(element) {
        return isInParents(element) && isInViewport(element);
    }

    // Return true if an element is inside its parents
    function isInParents(el) {
        var rect = el.getBoundingClientRect(), rectP, visible = true;
        while (el && el.parentNode && el.parentNode.getBoundingClientRect && visible) {
            el = el.parentNode;
            rectP = el.getBoundingClientRect();
            visible = rectInRect(rectP, rect);
        }
        return visible;
    }

    // Return true if element is inside the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return rectInRect({
            top: 0,
            left: 0,
            bottom: window.innerHeight || document.documentElement.clientHeight,
            right: window.innerWidth || document.documentElement.clientWidth
        }, rect);
    }

    // Return true if r1 is inside r0
    function rectInRect(r0, r1) {
        return r1.top < r0.bottom && r1.bottom > r0.top && r1.left < r0.right && r1.right > r0.left;
    }

    (function(prev){
        /*
         We could use below to write scroll handler on window to execute after scroll stop.

         function isMobile() {
         try{ document.createEvent("TouchEvent"); return true; }
         catch(e){ return false; }
         }

         But will fail if user scroll element through JavaScript
         var eventType = isMobile() ? "touchmove" : "scroll";
         */
        inViewport = window.setInterval(function(){
            var t = isVisible(node);
            if(t != prev) {
                fire({
                    node: node,
                    original: {
                        visible : t,
                        previous : prev,
                        current : t
                    }
                });
                prev = t;
            }
        }, timeThreshold);
    })();

    return {
        teardown: function () {
            window.clearInterval(inViewport);
        }
    };
};