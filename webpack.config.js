const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', 'whatwg-fetch', './js/app.js'],
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js',
    }
}