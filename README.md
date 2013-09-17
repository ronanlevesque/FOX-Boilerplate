# FOX Boilerplate

An HTML5 / Sass / Grunt Boilerplate including [FOX CSS](http://fox-css.com). Currently composed of the following :

* HTML5 responsive base template
* FOX CSS framework (Sass)
* Sass & CSS3 Autoprefixer (compile on default task)
* Livereload with Chrome plugin
* JSHint
* IE7&8 support (Modernizr HTML5 shiv & Respond.js)
* Files minification (CSS, JS and images)

And more to come.

## Installation

You need to have [Node](http://nodejs.org/) and [Grunt](http://gruntjs.com/) installed on your computer. If you don't, install Node from the website and install grunt with the command line :

	npm install -g grunt-cli

Download and install FOX Boilerplate files in the directory where you want to work. FOX Boilerplate is designed to be as less obtrusive as possible. Just install the Grunt dependencies above like this :

	npm install <module> --save-dev

Grunt dependencies for now :

* `grunt-contrib-sass`
* `grunt-autoprefixer`
* `grunt-csso`
* `grunt-contrib-imagemin`
* `grunt-contrib-watch`
* `grunt-contrib-uglify`
* `grunt-contrib-jshint`
* `grunt-contrib-concat`
* `matchdep`

**IMPORTANT** : you'll also need to install [Ruby](https://www.ruby-lang.org) and [Sass](http://sass-lang.com/). 

## Usage

 Run the following commands depending on what you want :

* `grunt` will run the `watch` task, which includes the following: livereload, Sass files compilation, and autoprefix task
* `grunt js` will run JSHint on your JavaScript files
* `grunt min` will minify your CSS and JS files and will concatenate all your plugins into `main.js`. It will also optimize your PNG and JPG files.

If you need more info on Grunt, you should take a look at Grunt's ["Getting Started" guide](http://gruntjs.com/getting-started).

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

