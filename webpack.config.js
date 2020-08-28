'use strict';

const path = require('path');

module.exports = {
    entry: './app/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js',
        library: 'dashplayer',
        libraryTarget:'umd',
        libraryExport:'default'
    }
};
