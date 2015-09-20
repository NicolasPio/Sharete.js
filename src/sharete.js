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
        this.currentUrl = window.location.href;
        this.pageTitle = document.querySelector('title').text;

        this.setElement( selector );
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

    Sharete.prototype.eventClick = function( linkToShare ) {

        if( !linkToShare ) {
            return;
        }

        this.currentElement.forEach(function(el) {

            el.addEventListener('click',function() {
                window.open( linkToShare, '_blank' );
            });
        });
    };

    /**
     * Share on Facebook
     * @return {void}
     *
     * todo:
     * - Customize data to share
     */
    Sharete.prototype.facebook = function(obj) {

        try {
            if( typeof obj != 'object' ) {
                throw new Error('Param bad format');
            }
        } catch (e) {
            console.log( e );
        }

        try {
            if( !obj.appId ) {
                throw new Error('Facebook app_id not found');
            }
        } catch(e) {
            console.log( e );
        }

        var share = 'https://www.facebook.com/dialog/share';
            share += '?app_id=' + obj.appId;
            share += '&href=' + encodeURI( this.currentUrl );
            share += '&redirect_uri='  + encodeURI( this.currentUrl );

        this.eventClick( share );
    };

    // Expose Sharete to global scope
    window.Sharete = Sharete;
})();
