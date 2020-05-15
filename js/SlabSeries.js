'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlabSeries = function () {
    function SlabSeries(el) {
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, SlabSeries);

        this.rootEl = el;
        this.bind(this.rootEl);
    }

    _createClass(SlabSeries, [{
        key: 'bind',
        value: function bind(el) {
            var component = this;

            //bind to each 'next' link
            var nextLinks = component.rootEl.querySelectorAll('.slab-series__next a');
            Array.from(nextLinks).forEach(function (linkEl) {
                linkEl.addEventListener('click', function (event) {

                    var currentSlab = event.target.parentNode.parentNode.parentNode,
                        nextSlab;
                    if (currentSlab.nextElementSibling) {
                        nextSlab = currentSlab.nextElementSibling;
                    } else {
                        nextSlab = currentSlab.parentNode.firstElementChild;
                    }
                    console.log("clicked!", nextSlab);
                });
                return event;
            });

            //window.addEventListener('resize', reportWindowSize);

            //document.addEventListener('keydown', function (event) {});
        }
    }, {
        key: 'advanceTo',
        value: function advanceTo(el) {
            //get the x position of the next slab

            //scroll to it
        }
    }]);

    return SlabSeries;
}();
//# sourceMappingURL=SlabSeries.js.map
