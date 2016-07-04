const webpack                = require( 'webpack' ),
      path                   = require( 'path' ),
      CleanWebpackPlugin     = require( 'clean-webpack-plugin' );

const PATHS                   = {
        root :   path.resolve( __dirname, './..' ),
        target : path.resolve( __dirname, './../dist' )
      };

module.exports = {
  context : path.resolve( __dirname, PATHS.root + '/src' ),
  entry :   {
    app :    [ path.resolve( __dirname, PATHS.root + '/src/js/app' ) ]
  },
  output : {
    path :          path.resolve( __dirname, PATHS.target + '/js' ),
    filename :      '[name].js',
    chunkFilename : '[name].chunk.js',
    pathinfo :      true
  },
  debug :       true,
  devtool :     '#source-map',
  module :      {
    loaders : [
      {
        test :    /\.jsx?$/,
        exclude : /(node_modules)/,
        loader :  'babel',
        query :   {
          presets : [ 'es2015', 'stage-0' ],
          plugins : [ 'transform-runtime', [ 'transform-es2015-classes', { loose : true } ] ]
        }
      }
    ]
  },
  plugins : [
    new CleanWebpackPlugin( [ 'js' ], {
      root :    path.resolve( PATHS.target ),
      verbose : true,
      dry :     false
    } )
  ]
};
