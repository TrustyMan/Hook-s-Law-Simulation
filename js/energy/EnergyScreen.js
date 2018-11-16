// Copyright 2015-2017, University of Colorado Boulder

/**
 * The "Energy" screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var EnergyModel = require( 'HOOKES_LAW/energy/model/EnergyModel' );
  var EnergyScreenView = require( 'HOOKES_LAW/energy/view/EnergyScreenView' );
  var hookesLaw = require( 'HOOKES_LAW/hookesLaw' );
  var HookesLawConstants = require( 'HOOKES_LAW/common/HookesLawConstants' );
  var HookesLawIconFactory = require( 'HOOKES_LAW/common/view/HookesLawIconFactory' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var energyString = require( 'string!HOOKES_LAW/energy' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function EnergyScreen( tandem ) {

    var options = _.extend( {}, HookesLawConstants.SCREEN_OPTIONS, {
      name: energyString,
      homeScreenIcon: HookesLawIconFactory.createEnergyScreenIcon(),
      tandem: tandem
    } );

    Screen.call( this,
      function() { return new EnergyModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new EnergyScreenView( model, tandem.createTandem( 'view' ) ); },
      options
    );
  }

  hookesLaw.register( 'EnergyScreen', EnergyScreen );

  return inherit( Screen, EnergyScreen );
} );