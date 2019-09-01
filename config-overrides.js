const { addBabelPlugin, override } = require('customize-cra');
require('dotenv').config();

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
