module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    compass: {
      dev: {
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    jshint: {
      all: ['js/main.js']
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/plugins/*.js', 'js/plugins/**/*.js'],
        dest: 'js/main.js'
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
        tasks: ['compass:dev']
      },
      html: {
        files: ['*.html']
      }
    }

  });

  grunt.registerTask('default', 'watch');
  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

}