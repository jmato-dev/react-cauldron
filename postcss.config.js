/* eslint-disable import/no-extraneous-dependencies */
const postcssNormalize = require('postcss-normalize');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [postcssNormalize(), autoprefixer],
};
