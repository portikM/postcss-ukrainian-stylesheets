# 🇺🇦 Postcss Ukrainian Stylesheets

[PostCSS] plugin for writing Ukrainian Style Sheets.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  колір: жовтогарячий;
  колір-фону: світло-блакитний;
  межа: 1px суцільно червоний !важливо;
  значення-аплікати: 10;
}
```

```css
.foo {
  color: orange;
  background-color: lightblue;
  border: 1px solid red !important;
  z-index: 10;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-ukrainian-stylesheets
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-ukrainian-stylesheets'),
    require('autoprefixer')
  ]
}
```

### Reference

* [Properties](https://github.com/portikM/postcss-ukrainian-stylesheets/blob/main/src/properties.js)
* [Values](https://github.com/portikM/postcss-ukrainian-stylesheets/blob/main/src/values.js)

[official docs]: https://github.com/postcss/postcss#usage
