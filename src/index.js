require( './style.scss' );
Ractive.events.viewport = require( './deps/ractive-event-viewport' );

/**
 *
 */
module.exports = Ractive.extend({
    template:   require( './template.html' ),
    oninit:     oninit
});






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
    var self = this;
    if ( e.original.visible ) {
        if ( !e.node.className.match( 'r-image-placeholder' ) ) {


            if ( !self.get( 'placeholder' ) ) {
                self.set( 'visible', true );
            }

            e.node.onload = function() {
                self.set( 'visible', true );
                self.set( 'noPlaceholder', true );
            }

            e.node.src = self.get( 'src' );

        } else {
            this.set( 'visiblePlaceholder', true );
        }

    }
}



