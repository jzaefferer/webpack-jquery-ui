# jQuery UI built with webpack demo

This repository provides a sample setup to use jQuery UI widgets, built
with webpack.

To try this locally, clone this repo, then run:

	npm install

## Running dev server

The setup includes `webpack-dev-server`, which builds file as they change and runs a server that auto reloads those changed files. To run:

	npm start

## Building for production

To build static files that can be uploaded on GitHub pages or any other static file hosting, run:

	npm run build

This writes resources into the `dist/` folder. They are not minified to make it easy to inspect the result.

## Scope of this demo

This demo is mostly useful to show how to use webpack to bundle a single page application that uses jQuery UI. The generated html page has no content on its own, which is a bad approach when you're building public facing websites. For those you'd start with a proper HTML page, but you could still use webpack to bundle the static resources (JS, CSS, images).

## Using `resolve.alias` to simplify imports

The demo is currently using these paths to require the autocomplete widget and its required CSS:

```js
require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/menu.css');
require('jquery-ui/themes/base/autocomplete.css');
require('jquery-ui/themes/base/theme.css');
var autocomplete = require('jquery-ui/ui/widgets/autocomplete');
```

If you don't want to specify the `themes/base` and `ui/widgets` paths for every import, you can use webpack's [`resolve.alias`](https://webpack.github.io/docs/configuration.html#resolve-alias) configuration:

```js
resolve: {
	alias: {
		'jquery-ui': 'jquery-ui/ui/widgets',
		'jquery-ui-css': 'jquery-ui/../../themes/base'
	}
}
```
This specifies two aliases, one for widgets, one for CSS. With that in place, the code then looks like this:
```js
require('jquery-ui-css/core.css');
require('jquery-ui-css/menu.css');
require('jquery-ui-css/autocomplete.css');
require('jquery-ui-css/theme.css');
var autocomplete = require('jquery-ui/autocomplete');
```
