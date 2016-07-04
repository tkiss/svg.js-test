import 'babel-polyfill';

import $ from 'jquery';
import SVGTest from './SVG';

$( document ).ready( () => {

  // With polyfill you can use String.at()
  if ( console && console.log ) {
    console.log( 'Test'.at( 0 ) );
  }
  
  const svgTest = new SVGTest()
  svgTest.init();

} );
