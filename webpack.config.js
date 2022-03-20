
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob')

const path = require('path');
const PATHS = {
  src: path.join(__dirname)
}
module.exports = {
 
    entry: {
       bootstrap:'./assets/src/bootstrap.js',
       script:'./assets/src/script.js',
    },
    output: {
        filename: 'js/[name].js',
        filename: 'js/[name].js',
         path: path.resolve(__dirname, 'assets/'),
       },
       module: {
        rules: [
          {
            test: /\.(scss)$/,
            use: [ 
              MiniCssExtractPlugin.loader, {
              // translates CSS into CommonJS modules
              loader: 'css-loader'
            }, {
              // Run postcss actions
              loader: 'postcss-loader',
              options: {
                // `postcssOptions` is needed for postcss 8.x;
                // if you use postcss 7.x skip the key
                postcssOptions: {
                  // postcss plugins, can be exported to postcss.config.js
                  plugins: function () {
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
              }
            }, {
              // compiles Sass to CSS
              loader: 'sass-loader'
            }]
          }
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
        filename: './css/[name].css'
      }),
    ],
    externals: {
      jquery: 'jQuery',
    },
  };
  