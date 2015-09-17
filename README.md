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


