module.exports = function(grunt) {

  grunt.initConfig({

    copy: {
      main: {
        src: 'src/*',
        dest: 'dest/',
      },
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "./",
          //mainConfigFile: "path/to/config.js",
          //name: "path/to/almond", /* assumes a production build using almond, if you don't use almond, you
          // need to set the "includes" or "modules" option instead of name */
          include: ['src/model/TimeSpan.js'],
          optimize: 'none',
          out: "dist/TimeSpan.js"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

};