import $ from 'jquery';
import svgjs from 'svg.js';

class SVGTest {

  init () {
    this.$svg = $( 'svg' );
    this.svg = svgjs( this.$svg.attr( 'id' ) );

    this.triangle = this.svg.select( '[id*=triangle]' ).first();

    this.triangle.animate( 2000, '>', 5000 ).opacity( 0 );
  }

}

export default SVGTest