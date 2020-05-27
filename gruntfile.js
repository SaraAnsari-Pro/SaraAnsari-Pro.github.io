//The "wrapper" function
module.exports = function(grunt) {

const sass = require('node-sass');
//Project and task configuration
 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
     /**
     *gunt sass
     *compile Sass to css using node-sass
     *https://www.npmjs.com/package/grunt-sass
     */
    sass: {
        options: {
            implementation: sass,
            sourceMap: false
        },
        dist: {
            files: {
                'css/styles.css': 'assets/scss/styles.scss'
            }
        }
    },
     /**
     *Grunt Contrib Watch
     *Monitor files and excute tasks
     *https://www.npmjs.com/package/grunt-contrib-watch
     */
 watch: {
   sass: {
     files: ['assets/scss/*.scss'],
     tasks: ['sass'], 
         },
    /**for minify JavaScript to avoid type grunt uglify*/     
     scripts: {
       files: ['assets/js/*.js'],
       tasks: ['uglify'], 
  },
},
     /**
     *Grunt Contrib uglify
     *Minify JavaScript files
     *https://www.npmjs.com/package/grunt-contrib-uglify
     */
     uglify:{
         my_target:{
             files:{
                 'js/scripts.js' :['assets/js/scripts.js','node_modules/jquery/dist/jquery.js']
             }
         }
     },
     /** Grunt Contrib Jshint
     * https://www.npmjs.com/package/grunt-contrib-jshint
     */

        jshint: {

                all: ['gruntfile.js', 'assets/js/scripts.js', 'js/scripts.js']
        }

}); 
//Loading Grunt plugins and tasks
// grunt.loadNpmTasks('grunt');
// grunt.loadNpmTasks('grunt-sass');
// grunt.loadNpmTasks('grunt-contrib-watch');
require('load-grunt-tasks')(grunt);

//Custom tasks
grunt.registerTask('default', ['watch']);
//grunt.registerTask('default', ['uglify']);

    
};

