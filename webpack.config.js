var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

module.exports = {
        entry: './src/index.jsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.jpg', '.png', '.json']
    },
     plugins: [
        new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify('production') }
      }),
   ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
  
            },
             {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },

              {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        port: '5000',
        inline: true,
        compress: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}