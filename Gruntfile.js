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
        cwd: 'css/sass/',
        src: ['**/*.scss', '!**/_*.scss'],
        dest: 'css/',
        ext: '.css'
      }
    },

    // Auto prefix CSS3 properties
    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    },

    // Run JSHint on JavaScript files
    jshint: {
      files: ['gruntfile.js', 'js/**/*.js', '!js/plugins/*.js']
    },

    // Minify CSS
    csso: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
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
            cwd: './img/',
            src: ['**/*.png'],
            dest: './img/',
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
            cwd: './img/',
            src: ['**/*.jpg'],
            dest: './img/',
            ext: '.jpg'
          }
        ]
      }
    },

    // Concatenate multiple JavaScript files
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: {
          'js/main.js': ['js/plugins/**/*.js']
        }
      }
    },

    // Minify JavaScript
    uglify: {
      js: {
        files: {
          'js/main.js': ['js/main.js']
        }
      }
    },

    // Watch task - live reload on Sass & HTML changes
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['css/sass/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:multiple_files']
      },
      html: {
        files: ['**/*.html']
      },
    }

  });

  // Default task
  grunt.registerTask('default', 'watch');

  // JavaScript testing task
  grunt.registerTask('js', 'jshint');

  // Minify and concat task
  grunt.registerTask('min', ['csso', 'imagemin', 'concat', 'uglify']);

};