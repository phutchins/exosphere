module.exports = function(grunt) {
  grunt.initConfig ({
    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};
