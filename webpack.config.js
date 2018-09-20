const path = require('path');
const outputDirectory = './src/app/dist';
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        open: false,
        proxy: {
            '/api': 'http://localhost:4200'
        }
    }
};