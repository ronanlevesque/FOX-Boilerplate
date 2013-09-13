module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        expand: true,
        cwd: 'css/sass/',
        src: ['*.scss', '!_*.scss'],
        dest: 'css/',
        ext: '.css'
      }
    },

    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    },

    jshint: {
      files: ['gruntfile.js', 'js/**/*.js', '!js/plugins/*.js']
    },

    csso: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    },

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

    uglify: {
      js: {
        files: {
          'js/main.js': ['js/main.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['css/sass/**/*.scss'],
        tasks: ['sass:dist', 'autoprefixer:multiple_files']
      },
      html: {
        files: ['*.html']
      },
    }

  });

  // default task
  grunt.registerTask('default', 'watch');

  // js testing task
  grunt.registerTask('js', 'jshint');

  // minify and concat task
  grunt.registerTask('min', ['csso', 'imagemin', 'concat', 'uglify']);

};