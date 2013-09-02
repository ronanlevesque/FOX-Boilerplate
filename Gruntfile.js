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
      files: ['gruntfile.js', 'js/plugins/*.js', 'js/main.js']
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
        tasks: ['compass:dev']
      },
      html: {
        files: ['*.html']
      }
    }

  });

  grunt.registerTask('default', 'watch');
  grunt.registerTask('js', ['jshint', 'concat', 'uglify']);

};