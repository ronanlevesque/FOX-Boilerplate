# FOX Boilerplate [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

An HTML5 / Sass / Grunt Boilerplate including [FOX CSS](http://fox-css.com). Currently composed of the following :

* HTML5 responsive base template
* FOX CSS framework (Sass)
* Sass & CSS3 Autoprefixer (compile on default task)
* Livereload with [Chrome plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
* JSHint, CSS Lint and HTML Lint
* IE7&8 support (HTML5 shiv & Respond.js)
* Files minification (CSS, JS and images)
* Local server at `localhost:1001`
* Notifications system

And more to come.

This Boilerplate is designed to be as less obtrusive as possible. FOX CSS is installed by default but you can start your project with your own framework or with just a blank CSS file.

## Installation

You need to have [Node](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed on your computer. If you don't, install Node from the website and install Grunt from the command line :

	npm install -g grunt-cli

You may need to run `sudo` depending on your OS, or run the command shell as an Admin (for Windows users).

Download and install FOX Boilerplate files in the directory where you want to work. Just install the Grunt dependencies by clicking on install-dependencies.bat or install-dependencies.command depending on your OS.

Alternatively, you can also run the following command :

	npm install <module> --save-dev

Grunt dependencies for now :

* matchdep
* grunt-contrib-connect
* grunt-notify
* grunt-contrib-sass
* grunt-autoprefixer
* grunt-contrib-watch
* grunt-contrib-csslint
* grunt-html
* grunt-contrib-jshint
* grunt-contrib-concat
* grunt-contrib-cssmin
* grunt-contrib-imagemin
* grunt-contrib-uglify
* grunt-contrib-copy

**IMPORTANT** : you'll also need to install [Ruby](https://www.ruby-lang.org) and [Sass](http://sass-lang.com/) in order to be able to run Sass.

## Files configuration

FOX-Boilerplate is composed of two main folders :

* dev
* dist (created on 1st `deploy` task)

Files should be placed in the following folders inside your project :

* CSS : dev/css/
* SCSS : dev/css/sass/..
* JS files : dev/js/
* JS plugins : dev/js/plugins/..
* Images : dev/img/..
* HTML files : anywhere inside /dev/

## Usage

Open the command line tool in your working folder. For Windows users, there are two easy ways to do so :

* Run cmd in the location bar
* Or shift + right click in your folder and select "Open command window here" (or something equivalent)

Run the following commands depending on what you want.

### grunt

`grunt` will run a local server at `localhost:1001` using `dev` folder as a root, and will also run the `watch` task, which includes the following: livereload (requires the [Chrome plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)), Sass files compilation, and autoprefix task.

### grunt test

`grunt test` will run JSHint on your JavaScript files and will also test your HTML and CSS files. You can also run each task separately with `grunt jshint`, `grunt csslint` and `grunt htmllint`.

### grunt concat

`grunt concat` will concatenate all your plugins into `main.js`. This is a very important task to run since it will limit requests, thus improving pages performances.

### grunt deploy

`grunt deploy` is the final task to be run once you wish to deploy your project. It will minify your CSS, uglify your JS, optimize your images (JPG and PNG) and will place all those files inside a /dist/ folder which will respect your folder hierarchy.

If you need more info on Grunt, you should take a look at Grunt's ["Getting Started"](http://gruntjs.com/getting-started) guide.

### grunt install-dependencies

`grunt install-dependencies` will install and update your npm dependencies.

## Notifications

FOX Boilerplate also comes with an optional notification system. In order to use it, you may need to install one of the following tools :

* Growl (Mac and Windows)
* Snarl (Windows)
* Notify-Send (Linux)

## Help

If you need help, please [contact me](https://twitter.com/eskiiss) on Twitter.

## License

The MIT License (MIT)

Copyright (c) 2013 Ronan Levesque

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

