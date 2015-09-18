(function () {
    'use strict';

    var savedEl;

    window.Sharrett = (function( el ) {

        Sharrett.setElement( el );
    });

    Sharrett.setElement = function( el ) {
        try {
            savedEl = document.querySelectorAll( el );
        } catch ( e ) {
            console.log( e.message );
        }
    };

    Sharrett.getElement = function () {
        return savedEl;
    };

})();
