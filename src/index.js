require( './style.scss' );
Ractive.events.viewport = require( './deps/ractive-event-viewport' );






/**
 *
 */
module.exports = Ractive.extend({
    template:   require( './template.html' ),
    data:       data,
    oninit:     oninit
});






/**
 *
 */
function data() {
    return {
        loaded: {
            placeholder: false,
            src: false
        }
    }
}





/**
 *
 */
function oninit() {
    this.on( 'viewport', viewport );

    this.observe( 'src', function ( nSrc, oSrc ) {
        if ( oSrc && nSrc !== oSrc ) {
            var imgs = this.get( 'img' ) || {};

            this.set( 'loaded.src', false );

            if ( imgs.src ) {
                imgs.src.remove();
                imgs.src.style.opacity = 0;
                imgs.src.src = nSrc;
            }

            if ( imgs.placeholder ) {
                imgs.placeholder.style.opacity = 1;
            }
        }
    });
}






/**
 *
 */
function viewport ( e ) {

    if ( e.original.visible && !this.get( 'loaded.src' ) ) {
        var hole = e.node,
            img  = new Image;

        this.set( 'hole', hole );
        this.set( 'img.src', img );

        img.onload = function () {
            hole.appendChild( img );

            var placeholder = hole.querySelector( '.r-image-placeholder' );

            if ( placeholder ) {
                this.set( 'img.placeholder', placeholder );
                placeholder.style.opacity = 0;
            }

            // This is lame, switch out for MutationObserver
            // or something that doesn't scream "hold my beer"
            setTimeout( function () {
                //self.set( 'placeholder' );
                this.set( 'loaded.src', true );
                img.style.opacity = 1;

            }.bind( this ), 100 );

        }.bind( this );


        img.style.opacity = 0;
        img.src = this.get( 'src' );

    }
}



