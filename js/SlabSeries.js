'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var slabSeriesTest = function slabSeriesTest() {
    domReady(function () {
        var targetEl = document.querySelectorAll('.slab-series');
        Array.from(targetEl).forEach(function (El) {
            var slabseries = new SlabSeries(El);
        });
    });
};

var SlabSeries = function () {
    function SlabSeries(rootElement, props) {
        _classCallCheck(this, SlabSeries);

        console.log('constructing SlabSeries');
        //get the root element
        this.root = rootElement;

        //get the 'next' button

        //get each slab and keep references in an array

        //set initial state (keep the state in dom attributes)

        //set inline styling
    }

    _createClass(SlabSeries, [{
        key: 'bind',
        value: function bind() {
            var component = this;

            //DOM events
            //button clicked

            //Custom events

            //Series advanced

            //Slab displayed

            //Slab hidden
        }
    }]);

    return SlabSeries;
}();
//# sourceMappingURL=SlabSeries.js.map
