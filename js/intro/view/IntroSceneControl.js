// Copyright 2015-2018, University of Colorado Boulder

/**
 * Scene control for the "Intro" screen, switches between 1 and 2 systems.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var hookesLaw = require( 'HOOKES_LAW/hookesLaw' );
  var HookesLawIconFactory = require( 'HOOKES_LAW/common/view/HookesLawIconFactory' );
  var inherit = require( 'PHET_CORE/inherit' );
  var RadioButtonGroup = require( 'SUN/buttons/RadioButtonGroup' );
  var Tandem = require( 'TANDEM/Tandem' );

  /**
   * @param {NumberProperty} numberOfSystemsProperty
   * @param {Object} [options]
   * @constructor
   */
  function IntroSceneControl( numberOfSystemsProperty, options ) {

    options = _.extend( {

      // RadioButtonGroup options
      orientation: 'horizontal',
      spacing: 10,
      buttonContentXMargin: 20,
      buttonContentYMargin: 5,
      selectedLineWidth: 2,

      // phet-io
      tandem: Tandem.required
    }, options );

    RadioButtonGroup.call( this, numberOfSystemsProperty, [
      { value: 1, node: HookesLawIconFactory.createSingleSpringIcon(), tandemName: 'oneSystemRadioButton' },
      { value: 2, node: HookesLawIconFactory.createTwoSpringsIcon(), tandemName: 'twoSystemsRadioButton' }
    ], options );
  }

  hookesLaw.register( 'IntroSceneControl', IntroSceneControl );

  return inherit( RadioButtonGroup, IntroSceneControl );
} );
