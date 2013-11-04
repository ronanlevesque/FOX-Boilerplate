module.exports = function(grunt) {

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tasks configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Local server configuration
    connect: {
      server: {
        options: {
          port: 1001,
          base: 'dev'
        }
      }
    },

    // Notifications
    notify: {
      server: {
        options: {
          message: 'Local server created at localhost:1001. Started watching...'
        }
      },
      jsconcat: {
        options: {
          message: 'Main.js successfully created'
        }
      },
      test: {
        options: {
          message: 'Tests finished'
        }
      },
      deploy: {
        options: {
          message: 'Deployment successful'
        }
      }
    },

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

    // CSS Lint
    csslint: {
      src: ['./dev/css/*.css']
    },

    // HTML Lint
    htmllint: {
      src: ['./dev/*.html']
    },

    // Run JSHint on JavaScript files
    // Full list available at http://www.jshint.com/docs/options/
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        latedef: true,
        noarg: true,
        undef: true,
        unused: true,
        eqnull: true,
        browser: true
      },
      files: ['./dev/js/**/*.js', '!./dev/js/plugins/*.js', '!./dev/js/ie/*.js']
    },

    // Minify CSS
    cssmin: {
      minify: {
        expand: true,
        cwd: './dev/css/',
        src: ['*.css', '!*.min.css'],
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
  grunt.registerTask('default', ['connect', 'notify:server', 'watch']);

  // JavaScript testing task
  grunt.registerTask('test', ['csslint', 'htmllint', 'jshint', 'notify:test']);

  // JavaScript concat task
  grunt.registerTask('jsconcat', ['concat', 'notify:jsconcat']);

  // Deployment tasks (minify and put files in 'dist' folder)
  grunt.registerTask('deploy', ['cssmin', 'imagemin', 'copy', 'uglify', 'notify:deploy']);

};