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
}






/**
 *
 */
function viewport ( e ) {

    if ( e.original.visible && !this.get( 'loaded.src' ) ) {
        var self = this,
            hole = e.node,
            img  = new Image;

        img.onload = function () {
            self.set( 'loaded.src', true );
            hole.appendChild( img );

            hole
                .querySelector( '.r-image-placeholder' )
                .style
                .opacity = 0;

            // This is lame, switch out for MutationObserver
            // or something that doesn't scream "hold my beer"
            setTimeout( function () {
                self.set( 'placeholder' );
                img.style.opacity = 1;

            }, 100 );

        }

        img.style.opacity = 0;
        img.src = this.get( 'src' );

    }
}



