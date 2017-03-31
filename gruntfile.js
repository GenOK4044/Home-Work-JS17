module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/script.main.js',
      },
    },
    uglify:{
      dist: {
        src: ['build/script.main.js'],
        dest: 'build/script.main.min.js',
      },
    },
    cssmin: {
      dist: {
        src: 'src/css/*.css',
          dest: 'build/css.main.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};

