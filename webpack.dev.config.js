const path = require('path')

module.exports = {
  //mode: 'development',
  entry: {
    'index': path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    port: 5000,
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      // test: que tipo de archivo quiero reconocer,
      // use: que loader se va a encargar del archivo
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(jpg|png|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000000,
          fallback: 'file-loader',
          name: 'images/[name].[hash].[ext]'
        }
      }
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }

    ]
  }
}
