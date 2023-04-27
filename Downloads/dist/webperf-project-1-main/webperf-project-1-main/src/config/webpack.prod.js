const { plugins } = require("chart.js");
const compression = require("compression");
const CompressionPlugin = require("compression-webpack-plugin");

plugins:

[
    new CompressionPlugin({
        algorithm:"gzip"

    })
]