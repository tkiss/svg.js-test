const WebpackConfig = require( 'webpack-config' ),
      webpack       = require( 'webpack' ),
      path          = require( 'path' );

module.exports = new WebpackConfig().extend( path.resolve( __dirname, './webpack.base.config.js' ) ).merge(
    {
      output :      {
        path :          path.resolve( __dirname, './../../dist/js' ),
        filename :      '[name].debug.js',
        chunkFilename : '[name].chunk.debug.js',
        pathinfo :      true
      },
      debug :       true,
      devtool :     '#source-map',
      plugins :     [
        new webpack.DefinePlugin( {
          'process.env' : {
            NODE_ENV : JSON.stringify( 'development' )
          }
        } )
      ]
    }
);
