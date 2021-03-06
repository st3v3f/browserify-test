

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.libname %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: { except: ['d3'] }
      },
      build: {
        src: '<%= pkg.libname %>.js',
        dest: '<%= pkg.libname %>.min.js'
      }
    },

    browserify: {
      client: {
        src: ['src/main.js'],
        dest: '<%= pkg.libname %>.js',
        options: {
          external: [],
        }
      }
    },

    watch: {
      files: [ "src/*.js"],
      tasks: [ 'browserify' ]
    }

  });

  // Load browserify to allow build of library into single js file.
  grunt.loadNpmTasks('grunt-browserify');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s).
  grunt.registerTask('default', ['browserify','uglify']);

};
