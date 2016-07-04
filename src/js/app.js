import 'babel-polyfill';

import $ from 'jquery';
import SVGTest from './SVG';

$( document ).ready( () => {

  console.log( 'asdf'.at( 0 ) );

  const svgTest = new SVGTest()
  svgTest.init();

} );
