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
        for (const [key, value] of Object.entries(UAProperties)) {
          if (decl.prop === value) {
            decl.prop = key
          }
        }

        // Values
        for (const [key, value] of Object.entries(UAValues)) {
          decl.value = decl.value.replace(value, key)
        }

        // Important
        if (decl.value.indexOf('!важливо') >= 0) {
          decl.value = decl.value.replace(/\s*!важливо\s*/, '')
          decl.important = true
        }
      })
    }
  }
}

module.exports.postcss = true
