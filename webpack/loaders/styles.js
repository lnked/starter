'use strict';

const { resolve } = require('path');
const define = require('../define');
const postcss = require('../postcss');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    {
        test: define.rs_regexp_styles,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: define.rs_development,
                    plugins: () => {
                        return postcss.plugins;
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: define.rs_development,
                    includePaths: [ define.rs_root ]
                }
            },
            {
                loader: 'scss-loader',
                options: {
                    sourceMap: define.rs_development,
                    includePaths: [ define.rs_root ]
                }
            },
            {
                loader: 'stylus-loader',
                options: {
                    sourceMap: define.rs_development,
                    includePaths: [ define.rs_root ]
                }
            },
            {
                loader: 'less-loader',
                options: {
                    sourceMap: define.rs_development,
                    includePaths: [ define.rs_root ]
                }
            }
        ],
        include: [
            define.rs_node,
            define.rs_root
        ]
    },
    {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options: {
                    module: true,
                    importLoaders: 1,
                    sourceMap: define.rs_analyzer,
                    modules: define.rs_production,
                    minimize: define.rs_production,
                    discardComments: { removeAll: true },
                    localIdentName: '[local]'
                }
            }
        ]
    }
];
