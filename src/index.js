const _ = require('lodash');
const UAProperties = require('./properties')
const UAValues = require('./values')

/* eslint-disable no-unused-vars */
/**
 * @type {import('postcss').PluginCreator}
 */

module.exports = (opts = {}) => {

  return {
    postcssPlugin: 'postcss-ukrainian-stylesheets',
    Root (root, postcss) {
      root.walkDecls((decl) => {
        // Properties
        _.forEach(UAProperties, (value, key) => {
          if (decl.prop === value) {
            decl.prop = key;
          }
        });

        // Values
        _.forEach(UAValues, (value, key) => {
          decl.value = decl.value.replace(value, key);
        });

        // Important
        if (decl.value.indexOf('!важливо') >= 0) {
          decl.value = decl.value.replace(/\s*!важливо\s*/, '');
          decl.important = true;
        }
      });
    }
  }
}

module.exports.postcss = true
