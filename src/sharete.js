/**
 * Sharete.js
 * Create your social share buttons easily customizable
 *
 * @author Nicolas Pio <nicolaspiof@gmail.com>
 */
(function () {
    'use strict';

    function Sharete( selector ) {

        // Use this library like jQuery
        // e.g Sharete('.selector')
        if (!this) {
            return new Sharete( selector );
        }

        this.currentElement = null;
        this.setElement( selector );
        this.watchElement();
    }

    /**
     * Get element passed by user and save this element
     * And save with Array
     * @param  {String} selector
     * @return {void}
     */
    Sharete.prototype.setElement = function( selector ) {
        var nodeList = document.querySelectorAll( selector ),
            currentElement = Array.prototype.slice.call( nodeList );

        this.currentElement = currentElement;
    };

    /**
     * Retrive element saved
     * @return {Array}
     */
    Sharete.prototype.getElement = function() {
        return this.currentElement;
    };

    // Expose Sharete to global scope
    window.Sharete = Sharete;
})();
