module.exports = function(grunt) {

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tasks configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass configuration
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        expand: true,
        cwd: './dev/css/sass/',
        src: ['**/*.scss', '!**/_*.scss'],
        dest: './dev/css/',
        ext: '.css'
      }
    },

    // Auto prefix CSS3 properties
    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: './dev/css/*.css',
        dest: './dev/css/'
      }
    },

    // Run JSHint on JavaScript files
    jshint: {
      files: ['gruntfile.js', './dev/js/**/*.js', '!./dev/js/plugins/*.js', '!./dev/js/ie/*.js']
    },

    // Minify CSS
    csso: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: './dev/css/*.css',
        dest: './dist/css/'
      }
    },

    // Minify images
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: './dev/img/',
            src: ['**/*.png'],
            dest: './dist/img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: './dev/img/',
            src: ['**/*.jpg'],
            dest: './dist/img/',
            ext: '.jpg'
          }
        ]
      }
    },

    // Minify HTML
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          removeEmptyAttributes: false,
          removeComments: true,
          removeCommentsFromCDATA: true,
          removeRedundantAttributes: true,
          collapseBooleanAttributes: true
        },
        files: [
          {
            expand: true,
            cwd: './dist/',
            src: ['**/*.html'],
            dest: './dist/',
            ext: '.html'
          }
        ]
      }
    },

    // Copy PHP and HTML files
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: './dev/',
            src: ['**/*.html', '**/*.php'],
            dest: './dist/'
          }
        ]
      }
    },

    // Concatenate multiple JavaScript files
    concat: {
      options: {
        separator: ';'
      },
      dev: {
        files: {
          './dev/js/main.js': ['./dev/js/plugins/**/*.js']
        }
      }
    },

    // Minify JavaScript
    uglify: {
      js: {
        files: [
          {
            expand: true,
            cwd: './dev/js/',
            src: ['**/*.js'],
            dest: './dist/js/'
          }
        ]
      }
    },

    // Watch task - live reload on Sass & HTML changes
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['./dev/css/sass/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:multiple_files'],
        options: {
          livereload: false
        }
      },
      css: {
        files: ['./dev/css/*.css']
      },
      html: {
        files: ['./dev/**/*.html', './dev/**/*.php']
      }
    }

  });

  // Default task
  grunt.registerTask('default', 'watch');

  // JavaScript testing task
  grunt.registerTask('jstest', 'jshint');

  // JavaScript concat task
  grunt.registerTask('jsconcat', 'concat');

  // Deployment tasks (minify and put files in 'dist' folder)
  grunt.registerTask('deploy', ['csso', 'imagemin', 'copy', 'htmlmin', 'uglify']);

};